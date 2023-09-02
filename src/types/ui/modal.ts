import type StoreModal from 'store/UI/modal-store'

export type TModal = {
  data?: any
  isOpen?: boolean
}

export interface IModalProps {
  store: StoreModal
  children: React.ReactNode
}
