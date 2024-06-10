import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import { creativeProjects } from '../data/creative'

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
    <Box display={'flex'} width={'100vw'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>

      <Button onClick={handleLeft} >
        <ArrowLeft />
      </Button>
      <Box >
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyImages src={`${creativeProjects[indexNum].imageUrl}`} sizeImg={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Suspense>
      </Box>
      <Button>
        <ArrowRight onClick={handleRight} />
      </Button>
    </Box>
  )
}

export default PhotoCarousel