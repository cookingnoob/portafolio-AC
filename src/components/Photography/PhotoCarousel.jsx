import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Button, CircularProgress } from '@mui/material'
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
      <Button  >
        <ArrowLeft fontSize='large' onClick={handleLeft} />
      </Button>
      <Box height={'100vh'} width={'100vw'} >
        <Suspense fallback={<CircularProgress />}>
          <LazyImages src={`${creativeProjects[indexNum].imageUrl}`} sizeImg={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Suspense>
      </Box>
      <Button>
        <ArrowRight fontSize='large' onClick={handleRight} />
      </Button>
    </>

  )
}

export default PhotoCarousel