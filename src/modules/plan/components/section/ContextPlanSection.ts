import { createContext } from 'react'
import StorePlanSection, {
  createEmptyPlanSection,
} from 'store/plan/planSection-store'

export const ContextPlanSectionStore = createContext(
  new StorePlanSection(createEmptyPlanSection())
)
