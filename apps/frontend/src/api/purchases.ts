import { apiGet } from '@/api/client'
import { PriceRangeData } from '@/api/types'
import { formatDateForAPI } from '@/utils/dateFormatter'

export async function fetchPurchaseFrequency(from?: Date, to?: Date): Promise<PriceRangeData[]> {
  const params: Record<string, string | undefined> = {}

  if (from && to) {
    params.from = formatDateForAPI(from)
    params.to = formatDateForAPI(to)
  }

  return apiGet<PriceRangeData[]>('/purchase-frequency', params)
}
