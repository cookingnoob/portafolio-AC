import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import { creativeProjects } from '../../data/creative'

const LazyImages = lazy(() => import('./LazyImages'))

const PhotoCarousel = ({ index }) => {
  const [indexNum, setIndexNum] = useState(index)


  const handleLeft = () => {
    indexNum === 0 ? setIndexNum(creativeProjects.length - 1) : setIndexNum(indexNum - 1)
  }

  const handleRight = () => {
    indexNum === creativeProjects.length - 1 ? setIndexNum(0) : setIndexNum(indexNum + 1)
  }
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeft()
      } else if (event.key === 'ArrowRight') {
        handleRight()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [indexNum])

  return (
    <>
      <Button onClick={handleLeft} >
        <ArrowLeft />
      </Button>
      <Box height={'80vh'} width={'90vw'} >
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyImages src={`${creativeProjects[indexNum].imageUrl}`} sizeImg={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Suspense>
      </Box>
      <Button>
        <ArrowRight onClick={handleRight} />
      </Button>
    </>

  )
}

export default PhotoCarousel