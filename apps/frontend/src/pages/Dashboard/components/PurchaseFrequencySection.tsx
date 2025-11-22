import { useState } from 'react'
import { usePurchaseFrequency } from '@/queries/usePurchaseFrequency'
import DateRangePicker from './DateRangePicker'
import PriceRangeChartArea from './PriceRangeChartArea'
import Text from '@/components/base/Text'

const RANGE_START_DATE = new Date('2024-07-01')
const RANGE_END_DATE = new Date('2024-07-31')

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<Date>(RANGE_START_DATE)
  const [endDate, setEndDate] = useState<Date>(RANGE_END_DATE)

  const { data, isLoading, error } = usePurchaseFrequency(startDate, endDate)

  const handleReset = () => {
    setStartDate(RANGE_START_DATE)
    setEndDate(RANGE_END_DATE)
  }

  console.log(data)
  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <Text as="h2" type="SUBTITLE" className="mb-2">
        가격대별 구매 빈도
      </Text>
      <Text type="CAPTION" color="text-gray-500" className="mb-4">
        각 가격대의 제품이 얼마나 많이 구매되었는지 확인할 수 있습니다
      </Text>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onReset={handleReset}
      />

      <PriceRangeChartArea data={data} isLoading={isLoading} error={error} />
    </section>
  )
}

export default PurchaseFrequencySection
