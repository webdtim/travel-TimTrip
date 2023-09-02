export type TListItem = {
  id: string
  value: string
}

export type TChecklistItem = TListItem & { checked: boolean }

export type TChecklist = {
  id: string
  title: string
  type: 'checklist'
  items: TChecklistItem[]
}

export interface IChecklistItemProps extends TChecklistItem {
  index: number
  setFocusOnTodo: (index?: number) => void
}
