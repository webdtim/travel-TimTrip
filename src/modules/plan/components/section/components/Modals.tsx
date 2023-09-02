import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ContextPlanSectionStore } from '../ContextPlanSection'
import ModalMenuItem from './ModalMenuItem'

const Modals = observer(() => {
  const store = useContext(ContextPlanSectionStore)
  return <>{store.modal && <ModalMenuItem />}</>
})

export default Modals
