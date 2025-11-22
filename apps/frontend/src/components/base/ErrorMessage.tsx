import Text from './Text'

interface ErrorMessageProps {
  message?: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center flex-1" role="alert">
      <div className="text-center">
        <Text type="BODY" weight="medium" color="text-red-600" className="mb-2">
          <span aria-hidden="true">⚠️ </span>
          데이터를 불러오는데 실패했습니다
        </Text>
        {message && (
          <Text type="CAPTION" color="text-gray-500">
            {message}
          </Text>
        )}
      </div>
    </div>
  )
}

export default ErrorMessage
