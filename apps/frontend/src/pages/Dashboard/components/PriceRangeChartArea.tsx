import PriceRangeChart from './PriceRangeChart'
import ErrorMessage from '@/components/base/ErrorMessage'
import LoadingIndicator from '@/components/base/LoadingIndicator'
import Text from '@/components/base/Text'
import { PriceRangeData } from '@/api/types'

interface PriceRangeChartAreaProps {
  data: PriceRangeData[] | undefined
  isLoading: boolean
  error: Error | null
}

const PriceRangeChartArea = ({ data, isLoading, error }: PriceRangeChartAreaProps) => {
  if (isLoading) {
    return <LoadingIndicator />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <Text color="text-gray-500">선택한 기간에 구매 데이터가 없습니다</Text>
      </div>
    )
  }

  return <PriceRangeChart data={data} />
}

export default PriceRangeChartArea
