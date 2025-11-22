export const queryKeys = {
  purchaseFrequency: {
    all: ['purchaseFrequency'] as const,
    filtered: (from?: Date, to?: Date) => ['purchaseFrequency', { from, to }] as const,
  },
  customers: {
    all: ['customers'] as const,
    filtered: (sortBy?: 'asc' | 'desc', name?: string) => ['customers', { sortBy, name }] as const,
  },
  customerPurchases: {
    detail: (customerId: number) => ['customerPurchases', customerId] as const,
  },
}
