import { CustomerData } from '@/api/types'
import CustomerList from './CustomerList'
import DataStateHandler from './DataStateHandler'

interface CustomerListAreaProps {
  data: CustomerData[] | undefined
  isLoading: boolean
  error: Error | null
}

const CustomerListArea = ({ data, isLoading, error }: CustomerListAreaProps) => {
  return (
    <DataStateHandler
      isLoading={isLoading}
      error={error}
      isEmpty={!data || data.length === 0}
      emptyMessage="고객 데이터가 없습니다"
    >
      <CustomerList customers={data!} />
    </DataStateHandler>
  )
}

export default CustomerListArea
