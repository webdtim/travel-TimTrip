import { useContext } from 'react'
import { ContextPlanSectionStore } from '../ContextPlanSection'
import FieldIcon from 'UI/field-icon/FieldIcon'
import { ReactComponent as MenuIcon } from 'uploads/dotes.svg'
import { ReactComponent as ArrowIcon } from 'uploads/arrow.svg'
import { ReactComponent as EditIcon } from 'uploads/edit.svg'
import Btn from 'UI/button/Btn'

const SectionHead: React.FC = () => {
  const store = useContext(ContextPlanSectionStore)

  return (
    <div className="plan-section__head">
      <Btn
        className="plan-section__collapse-btn"
        onClick={() => store.toggleCollapse()}
        modifiers={['transparent']}
        width="min-width"
      >
        <ArrowIcon />
      </Btn>
      <FieldIcon
        value={store.title}
        placeholder="Название"
        Icon={EditIcon}
        onChange={(value) => store.editTitle(value)}
      />
      <Btn
        onClick={() => store.openMenu()}
        modifiers={['transparent']}
        width="min-width"
      >
        <MenuIcon />
      </Btn>
    </div>
  )
}

export default SectionHead
