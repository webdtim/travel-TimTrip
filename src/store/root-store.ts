import { makeObservable, observable } from 'mobx'
import AuthStore from './auth/auth-store'
import StoreModalSearch from './search/modal-search-store'
import StorePlan from './plan/plan-store'
import { testPlanData } from 'utils/test/plan-data'

class RootStore {
  authStore: AuthStore
  searchModal = new StoreModalSearch()
  planStore = new StorePlan(testPlanData)

  constructor() {
    this.authStore = new AuthStore()

    makeObservable(this, {
      authStore: observable,
      // storeB: observable,
    })
  }

  openSearchModal = () => {
    this.searchModal.openModal()
  }
}

export default RootStore
