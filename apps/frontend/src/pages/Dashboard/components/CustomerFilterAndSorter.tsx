import { SortOrder } from '@/api/types'
import Input from '@/components/base/Input'
import Select, { type SelectOption } from '@/components/base/Select'

const SORT_OPTIONS: SelectOption[] = [
  { value: '', label: 'ID순' },
  { value: 'desc', label: '금액 높은순' },
  { value: 'asc', label: '금액 낮은순' },
]
interface CustomerFilterAndSorterProps {
  searchInput: string
  sortOrder: SortOrder | undefined
  onSearchChange: (value: string) => void
  onSortChange: (value: SortOrder | undefined) => void
}

const CustomerFilterAndSorter = ({
  searchInput,
  sortOrder,
  onSearchChange,
  onSortChange,
}: CustomerFilterAndSorterProps) => {
  return (
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
            onChange={(e) => onSearchChange(e.target.value)}
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
            onChange={(e) => onSortChange(e.target.value === '' ? undefined : (e.target.value as SortOrder))}
            aria-label="정렬 순서"
            options={SORT_OPTIONS}
          />
        </div>
      </div>
    </fieldset>
  )
}

export default CustomerFilterAndSorter
