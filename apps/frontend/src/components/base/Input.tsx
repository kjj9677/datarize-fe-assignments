import { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/className'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        'px-3 py-2 border border-gray-300 rounded-md text-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        className,
      )}
      {...props}
    />
  )
}

export default Input
