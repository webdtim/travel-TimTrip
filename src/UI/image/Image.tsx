import { FC, useState } from 'react'
import type { TFallbackImage } from 'types/ui/image'

const Image: FC<TFallbackImage> = ({
  alt,
  fallbackSrc = 'https://dentsg.pro/upload/resize_cache/iblock/6da/cp3qr9pebsoy253ssylnab9nqdlst5ti/800_800_182890484cc09cf4497c75dc9df68fb58/SHlang-dlya-podklyucheniya-DP_2.04-dlya-mikromotora.jpg',
  ...otherAttr
}) => {
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    setHasError(true)
  }

  return (
    <>
      {!hasError ? (
        <img {...otherAttr} alt={alt} onError={handleImageError} />
      ) : (
        <img src={fallbackSrc} alt={alt} />
      )}
    </>
  )
}

export default Image
