import React from 'react'
import './modal.scss'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { IModalProps } from 'types/ui/modal'

const Modal = observer(({ children, store }: IModalProps) => {
  autorun(() => {
    store?.isOpen
      ? document.body.classList.add('body--locked-scroll')
      : document.body.classList.remove('body--locked-scroll')
  })

  return (
    <div className="modal" aria-modal="true">
      <div className="modal__layout" onClick={() => store.close()}></div>
      <div className="modal__body">
        <div className="modal__top"></div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
})

export default Modal
