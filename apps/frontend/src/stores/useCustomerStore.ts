import { create } from 'zustand'

interface CustomerStore {
  selectedCustomerId: number | null
  setSelectedCustomerId: (id: number | null) => void
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  selectedCustomerId: null,
  setSelectedCustomerId: (id) => set({ selectedCustomerId: id }),
}))
