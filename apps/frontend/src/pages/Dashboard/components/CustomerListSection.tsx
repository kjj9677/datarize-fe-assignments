import { useState } from 'react'
import { useCustomers } from '@/queries/useCustomers'
import { useDebounce } from '@/hooks/useDebounce'
import { SortOrder } from '@/api/types'
import CustomerList from './CustomerList'
import DataStateHandler from './DataStateHandler'
import Input from '@/components/base/Input'
import Select from '@/components/base/Select'
import Text from '@/components/base/Text'

const CustomerListSection = () => {
  const [searchInput, setSearchInput] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)

  const debouncedSearch = useDebounce(searchInput, 300)

  const { data, isLoading, error } = useCustomers(sortOrder, debouncedSearch || undefined)

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-full w-[40%]">
      <Text as="h2" type="SUBTITLE" className="mb-2">
        고객별 구매금액
      </Text>
      <Text type="CAPTION" color="text-gray-500" className="mb-4">
        고객별 총 구매금액과 구매횟수를 확인할 수 있습니다
      </Text>

      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="고객 이름 검색"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-1"
        />
        <Select value={sortOrder ?? ''} onChange={(e) => setSortOrder(e.target.value === '' ? null : (e.target.value as SortOrder))}>
          <option value="">ID순</option>
          <option value="desc">금액 높은순</option>
          <option value="asc">금액 낮은순</option>
        </Select>
      </div>

      <DataStateHandler
        data={data}
        isLoading={isLoading}
        error={error}
        emptyMessage="고객 데이터가 없습니다"
        render={(data) => <CustomerList customers={data} />}
      />
    </section>
  )
}

export default CustomerListSection
