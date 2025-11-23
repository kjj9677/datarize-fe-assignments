import { SelectHTMLAttributes } from 'react'
import { cn } from '@/utils/className'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: SelectOption[]
  placeholder?: string
}

const Select = ({ className, options, placeholder, ...props }: SelectProps) => {
  return (
    <select
      className={cn(
        'px-3 py-2 border border-gray-300 rounded-md text-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        className,
      )}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
