import { CustomerData } from '@/api/types'
import { useCustomerStore } from '@/stores/useCustomerStore'
import Text from '@/components/base/Text'

interface CustomerListProps {
  customers: CustomerData[]
}

const CustomerList = ({ customers }: CustomerListProps) => {
  const { selectedCustomerId, setSelectedCustomerId } = useCustomerStore()

  return (
    <div className="flex-1 overflow-y-auto space-y-2">
      {customers.map((customer) => {
        const isSelected = selectedCustomerId === customer.id

        return (
          <div
            key={customer.id}
            onClick={() => setSelectedCustomerId(customer.id)}
            className={`p-4 rounded-lg border cursor-pointer transition-colors ${
              isSelected
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <Text type="BODY" weight="semibold">
                {customer.name}
              </Text>
              <Text type="CAPTION" color="text-gray-500">
                ID: {customer.id}
              </Text>
            </div>
            <div className="flex justify-between items-center">
              <Text type="CAPTION" color="text-gray-600">
                구매 횟수: {customer.count}회
              </Text>
              <Text type="BODY" weight="bold" color="text-blue-600">
                {customer.totalAmount.toLocaleString()}원
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CustomerList
