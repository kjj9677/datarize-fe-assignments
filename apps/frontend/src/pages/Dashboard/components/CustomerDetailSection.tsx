import { useCustomerStore } from '@/stores/useCustomerStore'
import { useCustomerPurchases } from '@/queries/useCustomerPurchases'
import PurchaseHistoryTable from './PurchaseHistoryTable'
import DataStateHandler from './DataStateHandler'
import DashboardSection from './DashboardSection'
import EmptyState from '@/components/base/EmptyState'

const CustomerDetailSection = () => {
  const selectedCustomerId = useCustomerStore((state) => state.selectedCustomerId)
  const { data: purchases, isLoading, error } = useCustomerPurchases(selectedCustomerId)
  const title = selectedCustomerId ? `구매 내역 - 고객 ID: ${selectedCustomerId}` : '구매 내역'

  return (
    <DashboardSection
      title={title}
      description="선택한 고객의 상세 구매 내역을 확인할 수 있습니다"
      containerStyle="w-[60%]"
    >
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
    </DashboardSection>
  )
}

export default CustomerDetailSection
