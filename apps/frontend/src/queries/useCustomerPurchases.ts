import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchCustomerPurchases } from '@/api/customers'
import { queryKeys } from '@/queries/queryKeys'

export const customerPurchasesQueryOptions = (customerId: number | null) =>
  queryOptions({
    queryKey: queryKeys.customerPurchases.detail(customerId),
    queryFn: () => fetchCustomerPurchases(customerId!),
    enabled: customerId !== null,
  })

export const useCustomerPurchases = (customerId: number | null) => useQuery(customerPurchasesQueryOptions(customerId))
