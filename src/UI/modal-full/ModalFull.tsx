import React from 'react'
import './modal-full.scss'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { IModalProps } from 'types/ui/modal'

const ModalFull = observer(({ children, store }: IModalProps) => {
  autorun(() => {
    store?.isOpen
      ? document.body.classList.add('body--locked-scroll')
      : document.body.classList.remove('body--locked-scroll')
  })

  return (
    <>
      {store?.isOpen && (
        <div className="modal-full" aria-modal="true">
          <div className="modal-full__body">
            <div className="modal-full__content">{children}</div>
          </div>
        </div>
      )}
    </>
  )
})

export default ModalFull
