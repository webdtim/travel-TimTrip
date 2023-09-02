import { useEffect, useState } from 'react'
import $api from 'utils/http/settings'
import SearchMap from 'modules/search-map/SearchMap'
import { Outlet } from 'react-router-dom'
import { SearchAttractionData } from 'modules/search/types'
import Search from 'modules/search/Search'

const initialPosition = {
  latitude: 42.885826,
  longitude: 47.643561,
  zoom: 14.5,
}

const SearchAttraction = () => {
  const [interestPoints, setInterestPoints] = useState<SearchAttractionData[]>(
    []
  )

  // Для теста
  // Получаем достопримечательности
  useEffect(() => {
    $api
      .get('http://localhost:4444/attractions-for-map')
      .then((res) => {
        setInterestPoints(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Search searchResults={interestPoints} />
      <SearchMap mapPoints={interestPoints} initialPosition={initialPosition} />
      <Outlet />
    </>
  )
}

export default SearchAttraction
