import { useContext } from 'react'
import Btn from 'UI/button/Btn'
import Modal from 'UI/modal/Modal'
import { observer } from 'mobx-react-lite'
import { ReactComponent as DeleteIcon } from 'uploads/delete.svg'
import { ReactComponent as DragIcon } from 'uploads/draggable.svg'
import { ContextPlanSectionStore } from '../ContextPlanSection'

const ModalMenuItem: React.FC = observer(() => {
  const store = useContext(ContextPlanSectionStore)
  const deleteItem = () => {
    const id = store.modal?.data?.id
    if (id) {
      store.deleteItem(id)
      store.closeAndDeleteModal()
    }
  }

  return (
    <>
      {store.modal?.isOpen && (
        <Modal store={store.modal}>
          <Btn modifiers={['transparent', 'pos-left']} onClick={deleteItem}>
            <DeleteIcon />
            <span>Удалить {store.modal?.data?.name}</span>
          </Btn>
          {/* <Btn  modifiers={['transparent','pos-left']} onClick={store.openChangePosition}>
          <DragIcon />
          <span>Переместить {elementName}</span>
        </Btn> */}
        </Modal>
      )}
    </>
  )
})

export default ModalMenuItem
