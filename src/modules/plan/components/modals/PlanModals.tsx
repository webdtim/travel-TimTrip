import { observer } from 'mobx-react-lite'
import { useStore } from 'store/useStore'
import PlanMenu from './PlanMenu'
import PlanSectionMenu from './PlanSectionMenu'

const PlanModals = observer(() => {
  const { planStore } = useStore()
  return (
    <>
      {planStore.modalMenu && <PlanMenu />}
      {planStore.modalSectionMenu && <PlanSectionMenu />}
    </>
  )
})

export default PlanModals
