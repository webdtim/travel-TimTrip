import { useStore } from 'store/useStore'
import { observer } from 'mobx-react-lite'
import Btn from 'UI/button/Btn'
import Modal from 'UI/modal/Modal'
import { ReactComponent as DeleteIcon } from 'uploads/delete.svg'
import { ReactComponent as LocationIcon } from 'uploads/location.svg'
import { ReactComponent as ListIcon } from 'uploads/list.svg'
import { ReactComponent as NoteIcon } from 'uploads/note.svg'
// import { ReactComponent as DragIcon } from 'uploads/draggable.svg'

const PlanSectionMenu: React.FC = observer(() => {
  const rootStore = useStore()
  const { planStore } = rootStore
  const id = planStore.modalSectionMenu?.data?.id
  const sectionStore = planStore.getSection(id)

  const deleteSection = () => {
    if (id) {
      planStore.deleteSection(id)
      planStore.closeAndDeleteModal('section')
    }
  }
  const addPlace = () => {
    if (sectionStore) {
      // sectionStore.addPlace()
      rootStore.openSearchModal()
      planStore.closeAndDeleteModal('section')
    }
  }
  const addNote = () => {
    if (sectionStore) {
      sectionStore.addNote()
      planStore.closeAndDeleteModal('section')
    }
  }
  const addChecklist = () => {
    if (sectionStore) {
      sectionStore.addChecklist()
      planStore.closeAndDeleteModal('section')
    }
  }

  return (
    <>
      {planStore.modalSectionMenu?.isOpen && (
        <Modal store={planStore.modalSectionMenu}>
          <Btn modifiers={['transparent', 'pos-left']} onClick={addPlace}>
            <LocationIcon />
            <span>Добавить место</span>
          </Btn>
          <Btn modifiers={['transparent', 'pos-left']} onClick={addNote}>
            <NoteIcon />
            <span>Добавить заметки</span>
          </Btn>
          <Btn modifiers={['transparent', 'pos-left']} onClick={addChecklist}>
            <ListIcon />
            <span>Добавить чек-лист</span>
          </Btn>
          <Btn modifiers={['transparent', 'pos-left']} onClick={deleteSection}>
            <DeleteIcon />
            <span>Удалить секцию</span>
          </Btn>
          {/* <Btn  modifiers={['transparent']} onClick={planStore.openChangePosition}>
          <DragIcon />
          <span>Переместить {elementName}</span>
        </Btn> */}
        </Modal>
      )}
    </>
  )
})

export default PlanSectionMenu
