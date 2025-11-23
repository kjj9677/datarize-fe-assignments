import { CustomerData } from '@/api/types'
import Text from '@/components/base/Text'

interface CustomerListProps {
  customers: CustomerData[]
  selectedCustomerId: number | null
  onSelectCustomer: (id: number) => void
}

const CustomerList = ({ customers, selectedCustomerId, onSelectCustomer }: CustomerListProps) => {
  return (
    <ul role="list" className="flex-1 overflow-y-auto space-y-2">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onSelect={onSelectCustomer}
        />
      ))}
    </ul>
  )
}

export default CustomerList

interface CustomerCardProps {
  customer: CustomerData
  isSelected: boolean
  onSelect: (id: number) => void
}

const CustomerCard = ({ customer, isSelected, onSelect }: CustomerCardProps) => {
  const { id, name, count, totalAmount } = customer
  const containerStyle = `w-full p-4 rounded-lg border transition-colors text-left ${
    isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
  }`

  return (
    <li key={customer.id}>
      <button
        onClick={() => onSelect(id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect(id)
          }
        }}
        aria-pressed={isSelected}
        aria-label={`고객 선택: ${name}, 구매 횟수 ${count}회, 총 구매금액 ${totalAmount.toLocaleString()}원`}
        className={containerStyle}
      >
        <div className="flex justify-between items-start mb-2">
          <Text type="BODY" weight="semibold">
            {name}
          </Text>
          <Text type="CAPTION" color="text-gray-500">
            ID: {id}
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Text type="CAPTION" color="text-gray-600">
            구매 횟수: {count}회
          </Text>
          <Text type="BODY" weight="bold" color="text-blue-600">
            {totalAmount.toLocaleString()}원
          </Text>
        </div>
      </button>
    </li>
  )
}
