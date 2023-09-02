import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ContextSearchModalStore } from '../../ContextSearchModal'
import './search-history.scss'

const SearchHistory: React.FC = observer(() => {
  const store = useContext(ContextSearchModalStore)
  return (
    <div className="search-history">
      {store.historyList.map((history) => (
        <div
          className="search-history__item"
          key={history}
          onClick={() => store.setQueryString(history)}
        >
          {history}
        </div>
      ))}
    </div>
  )
})

export default SearchHistory
