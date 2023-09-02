import type StoreCheckList from 'store/UI/checklist-store'
import type StoreEditor from 'store/UI/editor-store'
import { TChecklist } from './ui/checklist'
import { TEditor } from './ui/editor'
import StoreModal from 'store/UI/modal-store'

export type TPlanSectionItemData = TChecklist | TEditor

export type TPlanSectionItemStore = StoreCheckList | StoreEditor

export type TPlanSection = {
  id: string
  title: string
  items: TPlanSectionItemData[]
}

export type TPlanModal = {
  type: 'section' | 'plan'
  store: StoreModal
}

export type TPlan = {
  id: string
  title: string
  sections: TPlanSection[]
}
