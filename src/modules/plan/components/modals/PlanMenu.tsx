import { observer } from 'mobx-react-lite'
import { useStore } from 'store/useStore'
import Btn from 'UI/button/Btn'
import Modal from 'UI/modal/Modal'
import { ReactComponent as DeleteIcon } from 'uploads/delete.svg'
// import { ReactComponent as DragIcon } from 'uploads/draggable.svg'

const PlanMenu: React.FC = observer(() => {
  const { planStore } = useStore()

  const deletePlan = () => {
    planStore.deletePlan()
    planStore.closeAndDeleteModal('plan')
  }

  return (
    <>
      {planStore.modalMenu?.isOpen && (
        <Modal store={planStore.modalMenu}>
          <Btn modifiers={['transparent', 'pos-left']} onClick={deletePlan}>
            <DeleteIcon />
            <span>Удалить поездку</span>
          </Btn>
        </Modal>
      )}
    </>
  )
})

export default PlanMenu
