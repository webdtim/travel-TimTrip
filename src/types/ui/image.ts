import type React from 'react'

export type TFallbackImage = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}
