import { ReactNode } from 'react'
import maplibregl from 'maplibre-gl'
import ReactMapGL, {
  ViewStateChangeEvent,
  NavigationControl,
} from 'react-map-gl'
import { ViewState } from './MapTypes'
import 'maplibre-gl/dist/maplibre-gl.css'

interface MapProps {
  children: ReactNode
  initialViewState: ViewState
  onZoom?: (e: ViewStateChangeEvent) => void
}

const Map = ({ children, initialViewState, onZoom }: MapProps) => {
  return (
    <ReactMapGL
      mapLib={maplibregl}
      initialViewState={initialViewState}
      style={{ width: '100%', height: '100%' }}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=MXXeBWl4MTW0Qr1l8eU5"
      boxZoom={true}
      maxZoom={16.5}
      onZoom={onZoom}
    >
      {children}
      {/* управление картой */}
      <NavigationControl
        position="bottom-right"
        showCompass={false}
      ></NavigationControl>
    </ReactMapGL>
  )
}

export default Map
