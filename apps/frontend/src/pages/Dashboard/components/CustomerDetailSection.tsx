import { useCustomerStore } from '@/stores/useCustomerStore'
import { useCustomerPurchases } from '@/queries/useCustomerPurchases'
import PurchaseHistoryTable from './PurchaseHistoryTable'
import DataStateHandler from './DataStateHandler'
import EmptyState from '@/components/base/EmptyState'
import Text from '@/components/base/Text'

const CustomerDetailSection = () => {
  const selectedCustomerId = useCustomerStore((state) => state.selectedCustomerId)
  const { data: purchases, isLoading, error } = useCustomerPurchases(selectedCustomerId)
  const idText = selectedCustomerId ? ` - 고객 ID: ${selectedCustomerId}` : ''

  return (
    <section className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-[600px] w-[60%]">
      <Text as="h2" type="SUBTITLE" className="mb-2">
        구매 내역{idText}
      </Text>
      <Text type="CAPTION" color="text-gray-500" className="mb-4">
        선택한 고객의 상세 구매 내역을 확인할 수 있습니다
      </Text>

      {!selectedCustomerId ? (
        <EmptyState message="고객을 선택하세요" />
      ) : (
        <DataStateHandler
          data={purchases}
          isLoading={isLoading}
          error={error}
          emptyMessage="구매 내역이 없습니다"
          render={(purchases) => (
            <PurchaseHistoryTable
              purchases={purchases.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())}
            />
          )}
        />
      )}
    </section>
  )
}

export default CustomerDetailSection
