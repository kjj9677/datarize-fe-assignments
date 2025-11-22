import Text from './Text'

interface EmptyStateProps {
  message: string
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center flex-1" role="status">
      <Text color="text-gray-500">{message}</Text>
    </div>
  )
}

export default EmptyState
