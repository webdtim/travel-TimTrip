import { observer } from 'mobx-react-lite'
import { useStore } from 'store/useStore'
import Btn from 'UI/button/Btn'
import PlanModals from './components/modals/PlanModals'
import PlanHeader from './components/header/PlanHeader'
import Sections from './components/Sections'
import './plan.scss'

const Plan = observer(() => {
  const { planStore } = useStore()
  return (
    <div className="plan">
      <PlanHeader />
      <Sections />
      <Btn className="plan__add-section" onClick={() => planStore.addSection()}>
        <span>Добавить секцию</span>
      </Btn>
      <PlanModals />
    </div>
  )
})

export default Plan
