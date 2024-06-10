import React, { lazy } from 'react'

const LazyImages = ({ src }) => {
  return (
    <img src={src} width={'1000px'} />
  )
}

export default LazyImages