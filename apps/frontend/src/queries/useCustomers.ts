import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '../api/customers'
import { queryKeys } from './queryKeys'

export const customersQueryOptions = (sortBy?: 'asc' | 'desc', name?: string) =>
  queryOptions({
    queryKey: queryKeys.customers.filtered(sortBy, name),
    queryFn: () => fetchCustomers(sortBy, name),
  })

export const useCustomers = (sortBy?: 'asc' | 'desc', name?: string) =>
  useQuery(customersQueryOptions(sortBy, name))
