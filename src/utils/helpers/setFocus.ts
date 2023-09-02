import { TFieldBehaviors } from 'types/imperative_behaviors/behaviors'

const setFocus = (items: TFieldBehaviors[], i?: number) => {
  if (i !== undefined && i < 0) return
  if (!items.length) return
  const field = items[i !== undefined ? i : items.length - 1]
  field.focus()
}

export default setFocus
