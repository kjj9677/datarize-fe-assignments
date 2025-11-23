import { useState } from 'react'
import { useQueryParams } from 'react-url-params-state'
import { useCustomers } from '@/queries/useCustomers'
import { useDebounce } from '@/hooks/useDebounce'
import { SortOrder } from '@/api/types'
import CustomerList from './CustomerList'
import CustomerFilterAndSorter from './CustomerFilterAndSorter'
import DataStateHandler from './DataStateHandler'
import DashboardSection from './DashboardSection'

const CustomerListSection = () => {
  const [params, setParams] = useQueryParams({ customerId: 'number' })
  const [searchInput, setSearchInput] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(undefined)

  const debouncedSearch = useDebounce(searchInput, 300)

  const { data: customers, isLoading, error } = useCustomers(sortOrder, debouncedSearch || undefined)

  const selectedCustomerId = params.customerId ?? null
  const handleSelectCustomer = (id: number) => setParams({ customerId: id })

  return (
    <DashboardSection
      title="고객별 구매금액"
      description="고객별 총 구매금액과 구매횟수를 확인할 수 있습니다"
      containerStyle="w-[40%]"
    >
      <CustomerFilterAndSorter
        searchInput={searchInput}
        sortOrder={sortOrder}
        onSearchChange={setSearchInput}
        onSortChange={setSortOrder}
      />

      <DataStateHandler
        data={customers}
        isLoading={isLoading}
        error={error}
        emptyMessage="고객 데이터가 없습니다"
        render={(customers) => (
          <CustomerList
            customers={customers}
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={handleSelectCustomer}
          />
        )}
      />
    </DashboardSection>
  )
}

export default CustomerListSection
