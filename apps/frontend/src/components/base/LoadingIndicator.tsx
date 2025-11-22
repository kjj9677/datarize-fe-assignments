const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center h-96" role="status" aria-live="polite">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-hidden="true"></div>
      <span className="sr-only">로딩 중...</span>
    </div>
  )
}

export default LoadingIndicator
