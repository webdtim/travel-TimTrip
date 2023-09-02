import React from 'react'
import { observer } from 'mobx-react-lite'
import { ContextPlanSectionStore } from './ContextPlanSection'
import planSectionStore from 'store/plan/planSection-store'
import SectionItems from './components/SectionItems'
import AddButtons from './components/AddButtons'
import SectionHead from './components/SectionHead'
import './plan-section.scss'
import cn from 'classnames'
import Modals from './components/Modals'

interface PlanSectionProps {
  store: planSectionStore
}

const PlanSection: React.FC<PlanSectionProps> = observer(({ store }) => {
  const sectionClasses = cn('plan-section', {
    ['plan-section--collapsed']: store.collapsed,
  })

  return (
    <section className={sectionClasses}>
      <ContextPlanSectionStore.Provider value={store}>
        <SectionHead />
        <div className="plan-section__collapse-body">
          <SectionItems />
          <AddButtons />
        </div>
        <Modals />
      </ContextPlanSectionStore.Provider>
    </section>
  )
})

export default PlanSection
