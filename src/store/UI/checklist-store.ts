import { makeObservable, observable, action } from 'mobx'
import { TChecklistItem, TChecklist } from 'types/ui/checklist'
import { DropResult } from 'react-beautiful-dnd'
import { generateId } from 'utils/helpers/generateId'
import { StoreTypes } from 'types/storeTypes'

export const createEmptyChecklist = (): TChecklist => ({
  id: generateId(StoreTypes.CHECKLIST),
  title: 'Чек-лист',
  type: StoreTypes.CHECKLIST,
  items: [{ id: '0', value: '', checked: false }],
})

class StoreCheckList {
  id: string = ''
  type = StoreTypes.CHECKLIST
  title: string = ''
  items: TChecklistItem[] = []

  constructor({ id, title, items }: TChecklist) {
    makeObservable(this, {
      title: observable,
      items: observable,
      addItem: action,
      deleteItem: action,
      reOrder: action,
      editTitle: action,
      editItemValue: action,
      setItemChecked: action,
    })
    this.id = id
    this.title = title
    this.items = items
  }

  editTitle = (value: string) => {
    this.title = value
  }

  addItem = async (index?: number) => {
    const id = generateId()
    const newItem: TChecklistItem = {
      id,
      value: '',
      checked: false,
    }
    const items = Array.from(this.items)
    if (index) items.splice(index, 0, newItem)
    else items.push(newItem)
    this.items = items
    console.log('add item')
  }

  deleteItem = (id: string) => {
    if (this.items.length <= 1) return
    const items = this.items.filter((item) => item.id !== id)
    this.items = items
    console.log('deleteItem')
  }

  editItemValue = (id: string, value: string) => {
    const item = this.items.find((item) => item.id === id)
    if (item) item.value = value
  }

  setItemChecked = (id: string, checked: boolean) => {
    const item = this.items.find((item) => item.id === id)
    if (item) item.checked = checked
  }

  // editItem = ({ id, value, checked }: TChecklistItem) => {
  //   const item = this.items.find((item) => item.id === id)
  //   if (item) {
  //     item.value = value
  //     item.checked = checked
  //   }
  //   console.log('edit checklist')
  // }

  reOrder = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(this.items)
    const [removed] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, removed)
    this.items = items
    console.log('reorder checklist')
  }
}

export default StoreCheckList
