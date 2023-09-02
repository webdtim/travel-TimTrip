export type ViewState = {
  longitude: number
  /** Latitude at map center */
  latitude: number
  /** Map zoom level */
  zoom: number
  /** Map rotation bearing in degrees counter-clockwise from north */
  bearing?: number
  /** Map angle in degrees at which the camera is looking at the ground */
  pitch?: number
}
