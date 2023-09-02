import { action, makeObservable, observable } from 'mobx'
// import PlanService from 'services/planService'
import StorePlanSection, { createEmptyPlanSection } from './planSection-store'
import { TPlan, TPlanModal } from 'types/plan'
import StoreModal from 'store/UI/modal-store'

export const createEmptyPlan = (): TPlan => ({
  id: '',
  title: '',
  sections: [],
})

class StorePlan {
  id = ''
  title = ''
  sections: StorePlanSection[] = []
  modalMenu?: StoreModal
  modalSectionMenu?: StoreModal

  constructor({ id, title, sections }: TPlan) {
    makeObservable(this, {
      title: observable,
      sections: observable,
      modalMenu: observable,
      modalSectionMenu: observable,
      editTitle: action,
      addSection: action,
      deleteSection: action,
      openMenu: action,
      openMenuSection: action,
      closeAndDeleteModal: action,
    })
    this.id = id
    this.title = title
    this.sections = sections.map((secton) => new StorePlanSection(secton, this))
  }

  // async savePlan(list: TChecklist) {
  //   try {
  //     const response = await PlanService.SaveChanges(list)
  //   } catch (e: any) {
  //     console.log(e)
  //   }
  // }

  getSection = (id: string) => {
    const section = this.sections.find((store) => store.id === id)
    return section
  }

  editTitle = (value: string) => {
    this.title = value
  }

  deletePlan = () => {
    console.log('удаляем план поездки')
  }

  deleteSection = (id: string) => {
    if (this.sections.length < 1) return
    const newsections = this.sections.filter((item) => item.id !== id)
    this.sections = newsections
  }

  addSection = (index?: number) => {
    const newSection = new StorePlanSection(createEmptyPlanSection(), this)
    if (index) {
      const sections = Array.from(this.sections)
      sections.splice(index, 0, newSection)
      this.sections = sections
    } else this.sections.push(newSection)
  }

  collapseAllSections = () => {
    this.sections.forEach((sectionStore) => sectionStore.toggleCollapse(true))
  }

  uncollapseAllSections = () => {
    this.sections.forEach((sectionStore) => sectionStore.toggleCollapse(false))
  }

  openMenu = () => {
    this.modalMenu = new StoreModal({ isOpen: true })
  }

  openMenuSection = (id: string) => {
    this.modalSectionMenu = new StoreModal({ data: { id }, isOpen: true })
  }

  closeAndDeleteModal = (type: 'section' | 'plan') => {
    let modalStore = type === 'section' ? this.modalSectionMenu : this.modalMenu
    modalStore?.close()
    modalStore = undefined
  }
}

export default StorePlan
