import { PRICE_UNIT } from '@/constants/price'

export function formatPriceRange(range: string): string {
  if (range.includes('+')) {
    const min = parseInt(range.replace('+', '')) / PRICE_UNIT
    return `${min}만원 이상`
  }
  const [min, max] = range.split(' - ').map((n) => parseInt(n) / PRICE_UNIT)
  return `${min}-${max}만원`
}
