interface ErrorMessageProps {
  message?: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center h-96" role="alert">
      <div className="text-center">
        <p className="text-red-600 font-medium mb-2">
          <span aria-hidden="true">⚠️ </span>
          에러: 데이터를 불러오는데 실패했습니다
        </p>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </div>
    </div>
  )
}

export default ErrorMessage
