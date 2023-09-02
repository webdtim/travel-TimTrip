type TLocationPromise = Promise<{ latitude: number; longitude: number }>
type TgetCurrentLocationFn = () => TLocationPromise

export const getCurrentLocation: TgetCurrentLocationFn = async () => {
  const locationPromise: TLocationPromise = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const coord = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
          resolve(coord)
        },
        function (positionError) {
          reject(positionError.message)
        }
      )
    } else {
      reject('Geolocation is not supported by this browser.')
    }
  })

  return locationPromise
}
