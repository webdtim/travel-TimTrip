import { TSerializedElementList } from 'types/ui/editor'

export function unminify(obj: any): TSerializedElementList {
  const newObj: any = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      if (obj[key].type === 'text')
        newObj[key] = {
          ...obj[key],
          version: 1,
          detail: 0,
          mode: 'normal',
          direction: 'ltr',
        }
      else if (obj[key].type === 'autolink' || obj[key].type === 'link')
        newObj[key] = {
          ...obj[key],
          version: 1,
          indent: 0,
          rel: null,
          target: null,
          title: null,
          direction: 'ltr',
        }
      else
        newObj[key] = { ...obj[key], version: 1, indent: 0, direction: 'ltr' }

      if (obj[key] && obj[key].children) {
        newObj[key].children = unminify(obj[key].children)
      }
    }
  }
  return newObj
}
