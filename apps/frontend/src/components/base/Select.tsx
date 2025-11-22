import { SelectHTMLAttributes } from 'react'
import { cn } from '@/utils/className'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = ({ className, children, ...props }: SelectProps) => {
  return (
    <select
      className={cn(
        'px-3 py-2 border border-gray-300 rounded-md text-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export default Select
