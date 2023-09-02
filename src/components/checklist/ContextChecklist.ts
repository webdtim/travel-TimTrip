import { createContext } from 'react'
import StoreCheckList, { createEmptyChecklist } from 'store/UI/checklist-store'

export const ContextChecklistStore = createContext(
  new StoreCheckList(createEmptyChecklist())
)
