export type SortOrder = 'asc' | 'desc'

export interface PriceRangeData {
  range: string
  count: number
}

export interface CustomerData {
  id: number
  name: string
  count: number
  totalAmount: number
}

export interface PurchaseDetail {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}
