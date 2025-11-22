import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
      <div className="flex items-center gap-2">
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
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          minDate={new Date('2024-07-01')}
          maxDate={new Date('2024-07-31')}
          aria-label="시작일 선택"
        />
      </div>

      <div className="flex items-center gap-2">
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
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxDate={new Date('2024-07-31')}
          aria-label="종료일 선택"
        />
      </div>

      <button
        onClick={onReset}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="날짜 범위 초기화"
      >
        초기화
      </button>
    </div>
  )
}

export default DateRangePicker
