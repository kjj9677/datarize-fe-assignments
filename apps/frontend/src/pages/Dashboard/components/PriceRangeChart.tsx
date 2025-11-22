import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { PriceRangeData } from '@/api/types'
import { formatPriceRange } from '@/utils/priceFormatter'

interface PriceRangeChartProps {
  data: PriceRangeData[]
}

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe', '#eff6ff', '#e0e7ff', '#c7d2fe', '#a5b4fc']

const PriceRangeChart = ({ data }: PriceRangeChartProps) => {
  const chartData = data.map((item) => ({
    range: formatPriceRange(item.range),
    count: item.count,
    fullRange: item.range,
  }))

  const totalPurchases = chartData.reduce((sum, item) => sum + item.count, 0)
  const chartDescription = `가격대별 구매 빈도 차트. 총 ${totalPurchases}개의 구매가 있습니다. ${chartData.map((item) => `${item.range}: ${item.count}개`).join(', ')}`

  return (
    <div role="img" aria-label={chartDescription}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="range" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} stroke="#6b7280" />
          <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" label={{ value: '구매 수량', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            formatter={(value: number) => [`${value}개`, '구매 수량']}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceRangeChart
