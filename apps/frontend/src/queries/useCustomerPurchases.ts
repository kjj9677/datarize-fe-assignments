import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchCustomerPurchases } from '@/api/customers'
import { queryKeys } from '@/queries/queryKeys'

export const customerPurchasesQueryOptions = (customerId: number) =>
  queryOptions({
    queryKey: queryKeys.customerPurchases.detail(customerId),
    queryFn: () => fetchCustomerPurchases(customerId),
  })

export const useCustomerPurchases = (customerId: number | null) =>
  useQuery({
    ...customerPurchasesQueryOptions(customerId!),
    enabled: customerId !== null,
  })
