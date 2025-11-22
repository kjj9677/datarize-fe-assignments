import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '@/api/purchases'
import { queryKeys } from '@/queries/queryKeys'

export const purchaseFrequencyQueryOptions = (from?: Date, to?: Date) =>
  queryOptions({
    queryKey: queryKeys.purchaseFrequency.filtered(from, to),
    queryFn: () => fetchPurchaseFrequency(from, to),
  })

export const usePurchaseFrequency = (from?: Date, to?: Date) =>
  useQuery(purchaseFrequencyQueryOptions(from, to))
