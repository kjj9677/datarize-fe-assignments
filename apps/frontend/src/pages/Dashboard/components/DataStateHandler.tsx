import { ReactNode } from 'react'
import ErrorMessage from '@/components/base/ErrorMessage'
import LoadingIndicator from '@/components/base/LoadingIndicator'
import EmptyState from '@/components/base/EmptyState'

interface DataStateHandlerProps<TData> {
  data: TData[] | undefined
  isLoading: boolean
  error: Error | null
  emptyMessage: string
  render: (data: TData[]) => ReactNode
}

const DataStateHandler = <TData,>({
  data,
  isLoading,
  error,
  emptyMessage,
  render,
}: DataStateHandlerProps<TData>) => {
  if (isLoading) {
    return <LoadingIndicator />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  if (!data || data.length === 0) {
    return <EmptyState message={emptyMessage} />
  }

  return <>{render(data)}</>
}

export default DataStateHandler
