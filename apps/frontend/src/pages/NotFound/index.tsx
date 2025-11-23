import { Link } from 'react-router-dom'
import Text from '@/components/base/Text'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Text as="h1" className="text-6xl font-bold text-gray-900 mb-4">
          404
        </Text>
        <Text type="SUBTITLE" className="mb-2">
          페이지를 찾을 수 없습니다
        </Text>
        <Text type="BODY" color="text-gray-600" className="mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </Text>
        <Link to="/dashboard" className="p-2 text-gray-700 border border-gray-700 rounded-lg">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

export default NotFound
