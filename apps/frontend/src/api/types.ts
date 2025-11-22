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

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public originalError?: unknown,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}
