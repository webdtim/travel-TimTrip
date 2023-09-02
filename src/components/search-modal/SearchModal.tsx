import type StoreModalSearch from 'store/search/modal-search-store'
import ModalFull from 'UI/modal-full/ModalFull'
import Top from './components/Top'

import { ContextSearchModalStore } from './ContextSearchModal'
import './search-modal.scss'
import Body from './components/Body'

interface SearchModalProps {
  store: StoreModalSearch
}

const SearchModal: React.FC<SearchModalProps> = ({ store }) => {
  return (
    <ContextSearchModalStore.Provider value={store}>
      <ModalFull store={store.modal}>
        <div className="search-modal">
          <Top />
          <Body />
        </div>
      </ModalFull>
    </ContextSearchModalStore.Provider>
  )
}

export default SearchModal
