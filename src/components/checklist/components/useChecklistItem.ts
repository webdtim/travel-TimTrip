import React, { useContext, useState } from 'react'
import { ContextChecklistStore } from '../ContextChecklist'
import { IChecklistItemProps } from 'types/ui/checklist'

export default function useChecklistItem({
  id,
  value,
  checked: initChecked,
  index,
  setFocusOnTodo,
}: IChecklistItemProps) {
  const store = useContext(ContextChecklistStore)
  const [checked, setChecked] = useState<boolean>(initChecked)

  const checkedHandler = (checked: boolean) => {
    setChecked(checked)
    store.setItemChecked(id, checked)
  }
  const changeContent = (value: string) => {
    store.editItemValue(id, value)
  }
  const deleteEmptyField = (value: string) => {
    if (value === '') store.deleteItem(id)
  }
  const handlerKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Backspace' && event.currentTarget.value === '') {
      event.preventDefault()
      setFocusOnTodo(index - 1)
    } else if (event.key === 'Enter') {
      if (event.currentTarget.value === '') return event.preventDefault()
      if (event.shiftKey) return // если зажат shift
      event.preventDefault()
      const newIndex = index + 1
      store.addItem(newIndex).then(() => setFocusOnTodo(newIndex))
    }
  }

  return {
    isChecked: checked,
    checkedHandler,
    changeContent,
    deleteEmptyField,
    handlerKeyDown,
  }
}
