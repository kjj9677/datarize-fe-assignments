import { ApiError } from '@/api/errors'

const API_BASE_URL = 'http://localhost:4000/api'

export async function apiGet<T>(endpoint: string, params?: Record<string, string | undefined>): Promise<T> {
  const url = new URL(`${API_BASE_URL}${endpoint}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value)
      }
    })
  }

  try {
    const response = await fetch(url.toString())

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new ApiError(errorData.error || 'API request failed', response.status)
    }

    return response.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError('Network error occurred', undefined, error)
  }
}
