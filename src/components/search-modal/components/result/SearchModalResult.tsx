import React from 'react'
import cn from 'classnames'
import Image from 'UI/image/Image'
import { ReactComponent as LocationIcon } from 'uploads/location.svg'
import type { TSearchResult } from 'types/search'
import './search-modal-result.scss'

interface ResultProps {
  result: TSearchResult
}

const SearchModalResult: React.FC<ResultProps> = ({ result }) => {
  const classNames = cn('search-modal-result', {
    'search-modal-result--location': !result.mainPhoto,
  })

  return (
    <div className={classNames}>
      <div className="search-modal-result__photo">
        {result.mainPhoto ? (
          <Image
            loading="lazy"
            className="search-modal-result__img"
            width={64}
            height={64}
            src={result.mainPhoto}
            alt={result.name}
          />
        ) : (
          <div className="search-modal-result__icon">
            <LocationIcon />
          </div>
        )}
      </div>
      <div className="search-modal-result__info">
        <div className="search-modal-result__name">{result.name}</div>
        <div className="search-modal-result__location">{result.location}</div>
      </div>
    </div>
  )
}

export default SearchModalResult
