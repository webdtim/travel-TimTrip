import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import Btn from 'UI/button/Btn'
import FieldSearch from 'UI/field-search/FieldSearch'
import { ReactComponent as ArrowIcon } from 'uploads/arrow.svg'
import { ContextSearchModalStore } from '../ContextSearchModal'

const Top = observer(() => {
  const store = useContext(ContextSearchModalStore)
  const goToMainSearch = () => {
    console.log('открыть более мощный поиск. Но нужно ли это?')
  }
  return (
    <>
      <div className="search-modal__head">
        <Btn
          className="search-modal__back"
          onClick={store.closeModal}
          modifiers={['ellipse', 'transparent']}
        >
          <ArrowIcon />
        </Btn>
        <FieldSearch
          value={store.params.queryString}
          onChange={store.setQueryString}
          onSearch={store.startSearch}
          onClear={store.clearSearchState}
        />
      </div>
      {store.hasCoord && (
        <div>
          <Btn onClick={store.clearCoord}> Поблизости Х</Btn>
          <span>500м</span>
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            onChange={(e) => store.setRadius(Number(e.target.value))}
            value={store.searchInRadius}
          ></input>
          <span>100км</span>
        </div>
      )}
    </>
  )
})
export default Top
