import { useState } from 'react'
import { usePurchaseFrequency } from '@/queries/usePurchaseFrequency'
import DateRangePicker from './DateRangePicker'
import PriceRangeChart from './PriceRangeChart'
import DataStateHandler from './DataStateHandler'
import DashboardSection from './DashboardSection'
import { DATA_DATE_RANGE } from '@/constants/dates'

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<Date>(DATA_DATE_RANGE.START)
  const [endDate, setEndDate] = useState<Date>(DATA_DATE_RANGE.END)

  const { data: purchaseFrequency, isLoading, error } = usePurchaseFrequency(startDate, endDate)

  const handleReset = () => {
    setStartDate(DATA_DATE_RANGE.START)
    setEndDate(DATA_DATE_RANGE.END)
  }

  return (
    <DashboardSection
      title="가격대별 구매 빈도"
      description="각 가격대의 제품이 얼마나 많이 구매되었는지 확인할 수 있습니다"
    >
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onReset={handleReset}
      />

      <DataStateHandler
        data={purchaseFrequency}
        isLoading={isLoading}
        error={error}
        emptyMessage=""
        render={(purchaseFrequency) => <PriceRangeChart purchaseFrequency={purchaseFrequency} />}
      />
    </DashboardSection>
  )
}

export default PurchaseFrequencySection
