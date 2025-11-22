import { cn } from '@/utils/className'
import { ElementType, ReactNode } from 'react'

export type TextType = 'TITLE' | 'SUBTITLE' | 'BODY' | 'CAPTION' | 'SMALL'

const textStyleMap: Record<TextType, string> = {
  TITLE: 'text-2xl font-semibold leading-8',
  SUBTITLE: 'text-lg font-medium leading-7',
  BODY: 'text-base font-normal leading-6',
  CAPTION: 'text-sm font-normal leading-5',
  SMALL: 'text-xs font-normal leading-4',
}

const weightMap = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

interface TextProps {
  as?: ElementType
  children: ReactNode
  className?: string
  color?: string
  id?: string
  type?: TextType
  weight?: keyof typeof weightMap
}

const Text = ({
  as: Component = 'p',
  children,
  className,
  color = 'text-gray-900',
  id,
  type = 'BODY',
  weight,
}: TextProps) => {
  return (
    <Component className={cn(textStyleMap[type], color, weight && weightMap[weight], className)} id={id}>
      {children}
    </Component>
  )
}

export default Text
