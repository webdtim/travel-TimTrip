import { makeObservable, observable, action } from 'mobx'
import { TModal } from 'types/ui/modal'

class StoreModal {
  data?: any
  isOpen = false
  id = 'test'

  constructor({ data, isOpen = false }: TModal) {
    makeObservable(this, {
      isOpen: observable,
      open: action,
      close: action,
    })
    this.data = data
    this.isOpen = isOpen
  }

  open() {
    this.isOpen = true
  }

  close() {
    console.log('close!', this.isOpen)
    this.isOpen = false
  }

  getData() {
    return this.data
  }
}

export default StoreModal
