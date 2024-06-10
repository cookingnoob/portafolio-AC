import React, { lazy } from 'react'

const LazyImages = ({ src, sizeImg }) => {
  return (
    <img src={src} style={sizeImg} />
  )
}

export default LazyImages