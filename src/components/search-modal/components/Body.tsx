import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ContextSearchModalStore } from '../ContextSearchModal'
import Results from './Results'
import SearchAssistants from './SearchAssistants'

const Body: React.FC = observer(() => {
  const store = useContext(ContextSearchModalStore)

  return (
    <div className="search-modal__body">
      {store.tryingSearch ? (
        <div className="search-modal__section">
          <Results />
        </div>
      ) : (
        <SearchAssistants />
      )}
    </div>
  )
})

export default Body
