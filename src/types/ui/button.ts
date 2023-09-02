import { ElementType, ReactNode } from 'react'
export type TBtn = {
  width?: 'min-width'
  height?: 'auto'
  modifiers?: ('transparent' | 'pos-left' | 'ellipse' | 'smooth')[]
  children: ReactNode
  className?: string
  as?: ElementType
  href?: string
  type?: string
  onClick?: () => void
}
