import { PRICE_UNIT } from '@/constants/price'

export function formatPriceRange(range: string): string {
  const [minStr, maxStr] = range.split(' - ')
  const min = parseInt(minStr)
  const max = parseInt(maxStr)

  const formatAmount = (amount: number) => {
    if (amount === 0) return '0원'
    return `${Math.floor(amount / PRICE_UNIT)}만원`
  }

  const minLabel = formatAmount(min)
  const maxLabel = formatAmount(max)

  if (min === 0) {
    return `${maxLabel} 이하`
  }
  return `${minLabel} ~ ${maxLabel}`
}
