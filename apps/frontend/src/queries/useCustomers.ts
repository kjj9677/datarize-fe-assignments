import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '@/api/customers'
import { queryKeys } from '@/queries/queryKeys'
import { SortOrder } from '@/api/types'

export const customersQueryOptions = (sortBy?: SortOrder, name?: string) =>
  queryOptions({
    queryKey: queryKeys.customers.filtered(sortBy, name),
    queryFn: () => fetchCustomers(sortBy, name),
  })

export const useCustomers = (sortBy?: SortOrder, name?: string) =>
  useQuery(customersQueryOptions(sortBy, name))
