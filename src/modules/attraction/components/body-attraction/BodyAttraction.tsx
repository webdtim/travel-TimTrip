import React, { ReactNode } from 'react'
import './body-attraction.scss'

interface BodyAttractionProps {
  children: ReactNode
}

const BodyAttraction = ({ children }: BodyAttractionProps) => {
  return <div className="body-attraction">{children}</div>
}

export default BodyAttraction
