import SearchModal from 'components/search-modal/SearchModal'
import { useStore } from 'store/useStore'

const GlobalModals = () => {
  const globalStore = useStore()
  return (
    <>
      {globalStore.searchModal && (
        <SearchModal store={globalStore.searchModal} />
      )}
    </>
  )
}

export default GlobalModals
