import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/useStore'
import PlanSection from './section/PlanSection'

const Sections: FC = observer(() => {
  const { planStore } = useStore()
  return (
    <>
      {planStore.sections.map((itemStore) => (
        <PlanSection key={itemStore.id} store={itemStore} />
      ))}
    </>
  )
})

export default Sections
