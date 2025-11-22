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

      <fieldset className="mb-4">
        <legend className="sr-only">고객 필터</legend>
        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="customer-search" className="sr-only">
              고객 이름 검색
            </label>
            <Input
              id="customer-search"
              type="text"
              placeholder="고객 이름 검색"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="고객 이름 검색"
            />
          </div>
          <div>
            <label htmlFor="sort-order" className="sr-only">
              정렬 순서
            </label>
            <Select
              id="sort-order"
              value={sortOrder ?? ''}
              onChange={(e) => setSortOrder(e.target.value === '' ? undefined : (e.target.value as SortOrder))}
              aria-label="정렬 순서"
            >
              <option value="">ID순</option>
              <option value="desc">금액 높은순</option>
              <option value="asc">금액 낮은순</option>
            </Select>
          </div>
        </div>
      </fieldset>

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
