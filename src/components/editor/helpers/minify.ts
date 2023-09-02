import { TMinifiedElement } from 'types/ui/editor'

export function minify(
  obj: any
): TMinifiedElement | TMinifiedElement[] | undefined {
  const newObj: any = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (
      key === 'children' ||
      key === 'url' ||
      key === 'format' ||
      key === 'text' ||
      key === 'type'
    ) {
      if (key === 'children') {
        if (Array.isArray(obj[key])) {
          newObj[key] = obj[key].map((element: any) => {
            return minify(element)
          })
        }
      } else newObj[key] = obj[key]
    } else if (obj[key] && typeof obj[key] === 'object') {
      let isEmpty = Object.keys(obj[key]).length === 0
      if (isEmpty) return
      newObj[key] = minify(obj[key])
    }
  }
  return newObj
}
