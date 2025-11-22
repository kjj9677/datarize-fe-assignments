import { apiGet } from '@/api/client'
import { PriceRangeData } from '@/api/types'

export async function fetchPurchaseFrequency(from?: Date, to?: Date): Promise<PriceRangeData[]> {
  const params: Record<string, string | undefined> = {}

  if (from && to) {
    params.from = from.toISOString().split('T')[0]
    params.to = to.toISOString().split('T')[0]
  }

  return apiGet<PriceRangeData[]>('/purchase-frequency', params)
}
