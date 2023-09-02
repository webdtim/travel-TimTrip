import { makeObservable, observable, action } from 'mobx'
import { DropResult } from 'react-beautiful-dnd'
import StoreCheckList, { createEmptyChecklist } from 'store/UI/checklist-store'
import StoreEditor, { createEmptyEditor } from 'store/UI/editor-store'
import {
  TPlanSection,
  // TPlanSectionItem,
  TPlanSectionItemStore,
} from 'types/plan'
import { StoreTypes } from 'types/storeTypes'
import { generateId } from 'utils/helpers/generateId'
import type StorePlan from './plan-store'
import StoreModal from 'store/UI/modal-store'

export const createEmptyPlanSection = (): TPlanSection => ({
  id: generateId('section'),
  title: '',
  items: [],
})

class StorePlanSection {
  id = ''
  title = ''
  items: TPlanSectionItemStore[] = []
  collapsed = false
  parentStore?: StorePlan
  modal?: StoreModal

  constructor({ id, title, items }: TPlanSection, parentStore?: StorePlan) {
    makeObservable(this, {
      title: observable,
      items: observable,
      modal: observable,
      collapsed: observable,
      addChecklist: action,
      addPlace: action,
      addNote: action,
      deleteItem: action,
      // reOrder: action,
      editTitle: action,
      toggleCollapse: action,
      openMenuSectionItem: action,
      closeAndDeleteModal: action,
    })
    this.id = id
    this.title = title
    this.items = items.map((item) => {
      if (item.type === StoreTypes.EDITOR) return new StoreEditor(item)
      // else if (item.type === 'checklist') return new StoreCheckList(item)
      else return new StoreCheckList(item)
    })
    this.parentStore = parentStore
  }

  editTitle = (value: string) => {
    this.title = value
  }

  deleteItem = (id: string) => {
    if (this.items.length < 1) return
    const newItems = this.items.filter((item) => item.id !== id)
    this.items = newItems
  }

  _addItem = (newItem: TPlanSectionItemStore, index?: number) => {
    if (index) {
      const items = Array.from(this.items)
      items.splice(index, 0, newItem)
      this.items = items
    } else this.items.push(newItem)
    console.log('addItem in section')
  }

  addChecklist = (index?: number) => {
    const newChecklist = new StoreCheckList(createEmptyChecklist())
    this._addItem(newChecklist, index)
    console.log('add checklist')
  }

  addNote = (index?: number) => {
    const newEditor = new StoreEditor(createEmptyEditor())
    this._addItem(newEditor, index)
    console.log('add note')
  }

  addPlace = () => {
    console.log('add place')
  }

  reOrder = (result: DropResult) => {
    if (!result.destination) return

    const newItems = Array.from(this.items)
    const [removed] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, removed)
    this.items = newItems
  }

  toggleCollapse = (isCollapsed?: boolean) => {
    if (isCollapsed !== undefined) this.collapsed = isCollapsed
    else this.collapsed = !this.collapsed
  }

  openMenu = () => {
    this.parentStore?.openMenuSection(this.id)
  }

  openMenuSectionItem = (id: string, name: string) => {
    this.modal = new StoreModal({ data: { id, name }, isOpen: true })
  }

  closeAndDeleteModal = () => {
    this.modal?.close()
    this.modal = undefined
  }
}

export default StorePlanSection
