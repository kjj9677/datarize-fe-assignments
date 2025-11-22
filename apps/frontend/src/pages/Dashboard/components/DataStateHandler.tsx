import { ReactNode } from 'react'
import ErrorMessage from '@/components/base/ErrorMessage'
import LoadingIndicator from '@/components/base/LoadingIndicator'
import EmptyState from '@/components/base/EmptyState'

interface DataStateHandlerProps<TData> {
  data: TData[] | undefined
  isLoading: boolean
  error: unknown
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
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다'
    return <ErrorMessage message={errorMessage} />
  }

  if (!data || data.length === 0) {
    return <EmptyState message={emptyMessage} />
  }

  return <>{render(data)}</>
}

export default DataStateHandler
