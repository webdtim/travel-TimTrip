import { makeObservable, observable, action, reaction, computed } from 'mobx'
import StoreModal from 'store/UI/modal-store'
import type { TSearchData, TSearchFn, TSearchResult } from 'types/search'
import { getCurrentLocation } from 'utils/helpers/getCurrentLocation'
// import { testData } from './testData'
import $api from 'utils/http/settings'

class StoreModalSearch {
  queryString = ''
  coord = {
    longitude: 0,
    latitude: 0,
  }
  searchInCategories = []
  searchInRadius = 20000
  historyList: string[] = [
    'Дагестан',
    'Каспийск',
    'Развлечения в Каспийске',
    'туры',
  ]
  results: TSearchResult[] = []
  isLoading = false
  modal = new StoreModal({ isOpen: false })

  constructor() {
    makeObservable(this, {
      queryString: observable,
      coord: observable,
      searchInRadius: observable,
      hasCoord: computed,
      tryingSearch: computed,
      results: observable,
      isLoading: observable,
      setQueryString: action,
      setRadius: action,
      setLoading: action,
      setResults: action,
      clearCoord: action,
      clearParams: action,
      clearResults: action,
      setCurrentLocation: action,
    })

    reaction(
      () => [
        this.queryString,
        this.coord,
        this.searchInRadius,
        this.searchInCategories,
      ],
      ([queryString]) => {
        if (queryString !== '' || this.hasCoord) {
          this.startSearch()
        }
      },
      {
        name: 'search',
        delay: 200,
      }
    )
  }

  get hasCoord() {
    return !!(this.coord.latitude && this.coord.longitude)
  }

  get tryingSearch() {
    if (this.queryString || this.hasCoord) return true
    else return false
  }

  get params() {
    return {
      queryString: this.queryString,
      coord: this.coord,
      categories: this.searchInCategories,
      radius: this.searchInRadius,
    }
  }

  setQueryString = (value: string) => {
    this.queryString = value
  }

  setRadius = (value: number) => {
    this.searchInRadius = value
  }

  openModal = () => {
    this.modal.open()
  }

  closeModal = () => {
    this.modal.close()
  }

  clearCoord = () => {
    this.coord = {
      longitude: 0,
      latitude: 0,
    }
    console.log('очищаем координаты')
  }

  clearParams = () => {
    this.queryString = ''
    this.searchInCategories = []
    this.clearCoord()
  }

  clearResults = () => {
    this.results = []
  }

  clearSearchState = () => {
    this.clearParams()
    this.clearResults()
  }

  setLoading = (state?: boolean) => {
    if (state !== undefined) this.isLoading = state
    console.log('устанавливаюсь в ', state)
  }

  setResults = (newResults: TSearchResult[]) => {
    this.results = newResults
  }

  setCurrentLocation = async () => {
    try {
      this.coord = await getCurrentLocation()
    } catch (err) {
      alert(
        'У TimTrip нет доступа к данным о Вашем местоположении. Предоставьте вашему браузеру и TimTrip разрешение использовать данные о Вашем текущем местоположении и повторите попытку.'
      )
      console.error(err)
    }
  }

  findResults: TSearchFn = async (params) => {
    return $api.post('/search', { ...params })
  }

  // debouncedSearch = () => debounce(this.startSearch, 200)
  startSearch = async () => {
    try {
      console.log('делаем поисковой запрос. params = ', this.params)
      this.setLoading(true)
      const { data } = await this.findResults(this.params)
      this.setResults(data)
      this.setLoading(false)
    } catch (err) {
      this.setLoading(false)
      console.log('Возникла ошибка при запросе:', err)
    }
  }
}

export default StoreModalSearch
