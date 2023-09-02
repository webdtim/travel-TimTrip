import Btn from 'UI/button/Btn'
import SearchHistory from './search-history/SearchHistory'
import { ReactComponent as LocationIcon } from 'uploads/location.svg'
import { useContext } from 'react'
import { ContextSearchModalStore } from '../ContextSearchModal'
import { observer } from 'mobx-react-lite'

const SearchAssistants = observer(() => {
  const store = useContext(ContextSearchModalStore)
  return (
    <>
      <div className="search-modal__section">
        <Btn
          modifiers={['transparent', 'pos-left']}
          onClick={() => store.setCurrentLocation()}
        >
          <LocationIcon />
          <span>Поблизости</span>
        </Btn>
      </div>
      <div className="search-modal__section">
        <div className="search-modal__caption">Вы искали ранее</div>
        <SearchHistory />
      </div>
    </>
  )
})

export default SearchAssistants
