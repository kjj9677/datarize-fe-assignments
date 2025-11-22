import Text from './Text'

const LoadingIndicator = () => {
  const indicatorStyle = 'animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'
  return (
    <div className="flex items-center justify-center flex-1" role="status" aria-live="polite">
      <div className={indicatorStyle} />
      <Text as="span" className="sr-only">
        로딩 중...
      </Text>
    </div>
  )
}

export default LoadingIndicator
