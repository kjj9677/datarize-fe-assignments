import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DATA_DATE_RANGE } from '@/constants/dates'
import Button from '@/components/base/Button'

interface DateRangePickerProps {
  startDate: Date
  endDate: Date
  onStartDateChange: (date: Date) => void
  onEndDateChange: (date: Date) => void
  onReset: () => void
}

const DateRangePicker = ({ startDate, endDate, onStartDateChange, onEndDateChange, onReset }: DateRangePickerProps) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-2 w-[244px]">
        <label htmlFor="start-date" className="text-sm font-medium text-gray-700">
          시작일:
        </label>
        <ReactDatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => date && onStartDateChange(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy-MM-dd"
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          minDate={DATA_DATE_RANGE.START}
          maxDate={DATA_DATE_RANGE.END}
          aria-label="시작일 선택"
        />
      </div>

      <div className="flex items-center gap-2 w-[244px]">
        <label htmlFor="end-date" className="text-sm font-medium text-gray-700">
          종료일:
        </label>
        <ReactDatePicker
          id="end-date"
          selected={endDate}
          onChange={(date) => date && onEndDateChange(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          maxDate={DATA_DATE_RANGE.END}
          aria-label="종료일 선택"
        />
      </div>

      <Button onClick={onReset} variant="secondary" aria-label="날짜 범위 초기화">
        초기화
      </Button>
    </div>
  )
}

export default DateRangePicker
