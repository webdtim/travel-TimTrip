import React from 'react'
import Attraction from 'modules/attraction/Attraction'
import { useLoaderData } from 'react-router-dom'

const AttractionPage = () => {
  const attractionData: any = useLoaderData()

  return <Attraction {...attractionData} />
}

export default AttractionPage
