interface ErrorMessageProps {
  message?: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <p className="text-red-600 font-medium mb-2">데이터를 불러오는데 실패했습니다</p>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
