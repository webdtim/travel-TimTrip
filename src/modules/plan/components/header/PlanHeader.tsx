import { observer } from 'mobx-react-lite'
import { useStore } from 'store/useStore'
import Btn from 'UI/button/Btn'
import FieldIcon from 'UI/field-icon/FieldIcon'
import { ReactComponent as MenuIcon } from 'uploads/dotes.svg'
import { ReactComponent as EditIcon } from 'uploads/edit.svg'
import './plan-header.scss'

const PlanHeader: React.FC = observer(() => {
  const { planStore } = useStore()
  return (
    <div className="plan-header">
      временная шапка
      <div className="plan-header__title">
        <FieldIcon
          value={planStore.title}
          placeholder="Название"
          Icon={EditIcon}
          onChange={(value) => planStore.editTitle(value)}
        />
        <Btn
          onClick={() => planStore.openMenu()}
          modifiers={['transparent']}
          width="min-width"
        >
          <MenuIcon />
        </Btn>
      </div>
      <div className="plan-header__collapse-toggle">
        <Btn onClick={() => planStore.collapseAllSections()}>скрыть все</Btn>
        <Btn onClick={() => planStore.uncollapseAllSections()}>
          показать все
        </Btn>
      </div>
    </div>
  )
})

export default PlanHeader
