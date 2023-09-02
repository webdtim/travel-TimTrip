import { TFieldBehaviors } from 'types/imperative_behaviors/behaviors'
import { TField } from 'types/ui/fields'

const getMainBehaviors = (elem: TField): TFieldBehaviors => {
  return {
    focus() {
      elem.focus()
      // указатель в конец
      elem.selectionStart = elem.value.length
    },
    scrollTo() {
      elem.scrollIntoView()
    },
    scrollAndFocusTo() {
      elem.scrollIntoView()
      elem.focus()
    },
  }
}

export default getMainBehaviors
