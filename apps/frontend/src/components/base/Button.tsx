import React from 'react'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-sm',
  large: 'px-6 py-3 text-base',
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-md'
  const disabledStyles = 'cursor-not-allowed'

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? disabledStyles : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={combinedClassName} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
