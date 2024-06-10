import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { creativeProjects } from '../data/creative'

const LazyImages = lazy(() => import('./LazyImages'))

const PhotoCarousel = () => {
  const [indexNum, setIndexNum] = useState(0)

  const handleLeft = () => {
    indexNum === 0 ? setIndexNum(creativeProjects.length - 1) : setIndexNum(indexNum - 1)
  }

  const handleRight = () => {
    indexNum === creativeProjects.length - 1 ? setIndexNum(0) : setIndexNum(indexNum + 1)
  }
  return (
    <Box display={'flex'} width={'100vw'} alignItems={'center'} justifyContent={'center'}>

      <Button onClick={handleLeft}>
        <ArrowLeft />
      </Button>

      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyImages src={`${creativeProjects[indexNum].imageUrl}`} />
      </Suspense>
      <Button>
        <ArrowRight onClick={handleRight} />
      </Button>
    </Box>
  )
}

export default PhotoCarousel