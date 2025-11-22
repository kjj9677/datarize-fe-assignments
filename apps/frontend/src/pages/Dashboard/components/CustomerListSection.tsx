import { useState } from 'react'
import { useCustomers } from '@/queries/useCustomers'
import { useDebounce } from '@/hooks/useDebounce'
import { SortOrder } from '@/api/types'
import CustomerList from './CustomerList'
import CustomerFilterAndSorter from './CustomerFilterAndSorter'
import DataStateHandler from './DataStateHandler'
import Text from '@/components/base/Text'

const CustomerListSection = () => {
  const [searchInput, setSearchInput] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(undefined)

  const debouncedSearch = useDebounce(searchInput, 300)

  const { data: customers, isLoading, error } = useCustomers(sortOrder, debouncedSearch || undefined)

  return (
    <section className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-[600px] w-[40%]">
      <Text as="h2" type="SUBTITLE" className="mb-2">
        고객별 구매금액
      </Text>
      <Text type="CAPTION" color="text-gray-500" className="mb-4">
        고객별 총 구매금액과 구매횟수를 확인할 수 있습니다
      </Text>

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
        render={(customers) => <CustomerList customers={customers} />}
      />
    </section>
  )
}

export default CustomerListSection
