import { useState } from 'react'
import { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

import Map from 'components/map/Map'
import PhotoPoint from './components/photo-point/PhotoPoint'
import { ViewState } from 'components/map/MapTypes'
import { SearchAttractionData } from 'modules/search/types'
import './search-map.scss'

interface SearchMapProps {
  mapPoints: SearchAttractionData[]
  initialPosition: ViewState
}

const SearchMap = ({ mapPoints, initialPosition }: SearchMapProps) => {
  const [showBigPoint, setShowBigPoint] = useState<boolean>(false)

  const handleZoom = (newViewport: any) => {
    if (newViewport.viewState.zoom <= 15) {
      if (showBigPoint) setShowBigPoint(false)
    } else {
      if (!showBigPoint) setShowBigPoint(true)
    }
  }

  const clickHandler = (id: string): void => {
    //
  }

  return (
    <div className="search-map">
      <Map initialViewState={initialPosition} onZoom={handleZoom}>
        {mapPoints.map((point: SearchAttractionData) => (
          <Marker
            key={point._id}
            longitude={point.coord.longitude}
            latitude={point.coord.latitude}
            anchor="center"
            onClick={() => clickHandler(point._id)}
          >
            <Link
              className="search-map__link"
              to={`/search/${point.friendlyURL}`}
            >
              <PhotoPoint
                name={point.name}
                imageURL={point.photo[0]}
                isBigPhoto={showBigPoint}
              />
            </Link>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default SearchMap
