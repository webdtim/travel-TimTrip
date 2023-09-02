import React, { useContext } from 'react'
import SearchModalResult from './result/SearchModalResult'
import { observer } from 'mobx-react-lite'
import { ContextSearchModalStore } from '../ContextSearchModal'
import Skeleton from 'UI/skeleton/Skeleton'

const Results: React.FC = observer(() => {
  const store = useContext(ContextSearchModalStore)
  console.log('Перерисовка компонента результатов')

  return (
    <div className="search-modal__results">
      {store.isLoading ? (
        <div style={{ display: 'flex', gap: '13px' }}>
          <Skeleton style={{ width: '64px', height: '64px' }} />
          <div style={{ width: '100%' }}>
            <Skeleton style={{ height: '34px' }} />
            <Skeleton style={{ height: '20px', marginTop: '10px' }} />
          </div>
        </div>
      ) : store.results.length ? (
        store.results.map(
          (result, i) =>
            i < 20 && <SearchModalResult key={result._id} result={result} />
        )
      ) : (
        <div>Результаты не найдены!</div>
      )}
    </div>
  )
})

export default Results
