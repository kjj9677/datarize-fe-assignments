import { apiGet } from '@/api/client'
import { CustomerData, PurchaseDetail, SortOrder } from '@/api/types'

export async function fetchCustomers(sortBy?: SortOrder, name?: string): Promise<CustomerData[]> {
  const params: Record<string, string | undefined> = {}

  if (sortBy !== undefined) params.sortBy = sortBy
  if (name) params.name = name

  return apiGet<CustomerData[]>('/customers', params)
}

export async function fetchCustomerPurchases(customerId: number): Promise<PurchaseDetail[]> {
  return apiGet<PurchaseDetail[]>(`/customers/${customerId}/purchases`)
}
