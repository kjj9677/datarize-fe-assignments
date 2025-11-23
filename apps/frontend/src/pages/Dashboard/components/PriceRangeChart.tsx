import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PriceRangeData } from '@/api/types'
import { formatPriceRange } from '@/utils/priceFormatter'

const CHART_STYLES = {
  height: 400,
  barSize: 40,
  barColor: '#3b82f6',
  barRadius: [4, 4, 0, 0] as [number, number, number, number],
  xAxisHeight: 20,
  margin: { top: 20, right: 30, left: 20, bottom: 20 },
  tooltip: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  grid: {
    strokeDasharray: '3 3',
    stroke: '#e5e7eb',
  },
  axis: {
    fontSize: 12,
    stroke: '#6b7280',
  },
  yAxisLabel: {
    value: '구매 수량',
    angle: -90,
    position: 'insideLeft' as const,
  },
} as const

interface PriceRangeChartProps {
  purchaseFrequency: PriceRangeData[]
}

const PriceRangeChart = ({ purchaseFrequency }: PriceRangeChartProps) => {
  const chartData = purchaseFrequency.map((item) => ({
    range: formatPriceRange(item.range),
    count: item.count,
    fullRange: item.range,
  }))

  const totalPurchases = chartData.reduce((sum, item) => sum + item.count, 0)
  const chartDescription = `가격대별 구매 빈도 차트. 총 ${totalPurchases}개의 구매가 있습니다. ${chartData
    .map((item) => `${item.range}: ${item.count}개`)
    .join(', ')}`

  return (
    <div role="img" aria-label={chartDescription}>
      <ResponsiveContainer width="100%" height={CHART_STYLES.height}>
        <BarChart data={chartData} margin={CHART_STYLES.margin} tabIndex={-1}>
          <CartesianGrid strokeDasharray={CHART_STYLES.grid.strokeDasharray} stroke={CHART_STYLES.grid.stroke} />
          <XAxis
            dataKey="range"
            textAnchor="middle"
            height={CHART_STYLES.xAxisHeight}
            tick={{ fontSize: CHART_STYLES.axis.fontSize }}
          />
          <YAxis
            tick={{ fontSize: CHART_STYLES.axis.fontSize }}
            stroke={CHART_STYLES.axis.stroke}
            label={CHART_STYLES.yAxisLabel}
          />
          <Tooltip contentStyle={CHART_STYLES.tooltip} formatter={(value: number) => [`${value}개`, '구매 수량']} />
          <Bar
            dataKey="count"
            radius={CHART_STYLES.barRadius}
            fill={CHART_STYLES.barColor}
            barSize={CHART_STYLES.barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceRangeChart
