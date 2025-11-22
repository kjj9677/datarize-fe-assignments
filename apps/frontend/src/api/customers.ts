import { apiGet } from './client'
import { CustomerData, PurchaseDetail } from './types'

export async function fetchCustomers(sortBy?: 'asc' | 'desc', name?: string): Promise<CustomerData[]> {
  const params: Record<string, string | undefined> = {}

  if (sortBy) params.sortBy = sortBy
  if (name) params.name = name

  return apiGet<CustomerData[]>('/customers', params)
}

export async function fetchCustomerPurchases(customerId: number): Promise<PurchaseDetail[]> {
  return apiGet<PurchaseDetail[]>(`/customers/${customerId}/purchases`)
}
