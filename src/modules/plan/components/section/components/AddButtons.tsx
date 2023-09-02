import Btn from 'UI/button/Btn'
import { ReactComponent as LocationIcon } from 'uploads/location.svg'
import { ReactComponent as ListIcon } from 'uploads/list.svg'
import { ReactComponent as NoteIcon } from 'uploads/note.svg'
import { useContext } from 'react'
import { ContextPlanSectionStore } from '../ContextPlanSection'
import { useStore } from 'store/useStore'

const AddButtons = () => {
  const store = useContext(ContextPlanSectionStore)
  const rootStore = useStore()

  return (
    <div className="plan-section__btns">
      <Btn
        className="plan-section__gray-icon"
        modifiers={['smooth']}
        onClick={() => rootStore.openSearchModal()}
      >
        <LocationIcon /> <span>Добавить место</span>
      </Btn>
      <Btn modifiers={['ellipse']} onClick={() => store.addNote()}>
        <NoteIcon />
      </Btn>
      <Btn modifiers={['ellipse']} onClick={() => store.addChecklist()}>
        <ListIcon />
      </Btn>
    </div>
  )
}

export default AddButtons
