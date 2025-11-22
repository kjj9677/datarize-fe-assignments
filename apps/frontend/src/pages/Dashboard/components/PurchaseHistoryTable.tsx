import { PurchaseDetail } from '@/api/types'
import Text from '@/components/base/Text'

interface PurchaseHistoryTableProps {
  purchases: PurchaseDetail[]
}

const PurchaseHistoryTable = ({ purchases }: PurchaseHistoryTableProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <table className="w-full">
        <caption className="sr-only">고객 구매 내역 테이블</caption>
        <TableHeader />
        <TableBody purchases={purchases} />
      </table>
    </div>
  )
}

const TableHeader = () => {
  const columns = [
    { label: '날짜', align: 'text-left' },
    { label: '상품', align: 'text-left' },
    { label: '수량', align: 'text-center' },
    { label: '금액', align: 'text-right' },
  ]

  return (
    <thead className="bg-gray-50 sticky top-0">
      <tr>
        {columns.map((column) => (
          <th key={column.label} scope="col" className={`px-4 py-3 ${column.align}`}>
            <Text type="CAPTION" weight="semibold" color="text-gray-700">
              {column.label}
            </Text>
          </th>
        ))}
      </tr>
    </thead>
  )
}

interface TableBodyProps {
  purchases: PurchaseDetail[]
}

const TableBody = ({ purchases }: TableBodyProps) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {purchases.map((purchase) => {
        const { date, product, quantity, price, imgSrc } = purchase
        return (
          <tr key={`${product}${date}`} className="hover:bg-gray-50 focus-within:bg-gray-100">
            <td className="px-4 py-3">
              <Text type="CAPTION" color="text-gray-600">
                {new Date(date).toLocaleDateString('ko-KR')}
              </Text>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={imgSrc}
                  alt={`상품 이미지: ${product}`}
                  className="w-12 h-12 object-cover rounded border border-gray-200"
                />
                <Text type="CAPTION">{product}</Text>
              </div>
            </td>
            <td className="px-4 py-3 text-center">
              <Text type="CAPTION" color="text-gray-600">
                {quantity}개
              </Text>
            </td>
            <td className="px-4 py-3 text-right">
              <Text type="BODY" weight="semibold" color="text-gray-900">
                {price.toLocaleString()}원
              </Text>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default PurchaseHistoryTable
