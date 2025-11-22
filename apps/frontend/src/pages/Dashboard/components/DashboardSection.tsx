import { ReactNode } from 'react'
import Text from '@/components/base/Text'
import { cn } from '@/utils/className'

interface DashboardSectionProps {
  title: string
  description: string
  containerStyle?: string
  children: ReactNode
}

const DashboardSection = ({ title, description, containerStyle, children }: DashboardSectionProps) => {
  const baseContainerStyle = 'flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-[600px]'

  return (
    <section className={cn(baseContainerStyle, containerStyle)}>
      <Text as="h2" type="SUBTITLE" className="mb-2">
        {title}
      </Text>
      <Text type="CAPTION" color="text-gray-500" className="mb-4">
        {description}
      </Text>
      {children}
    </section>
  )
}

export default DashboardSection
