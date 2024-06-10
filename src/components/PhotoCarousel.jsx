import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { creativeProjects } from '../data/creative'

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

      {/* <img src={`${imageOnModal}`} height={'800px'} onClick={handleClose} style={{ cursor: 'pointer' }} /> */}
      <h1>{indexNum}</h1>
      <img src={`${creativeProjects[indexNum].imageUrl}`} width={'1000px'} />
      <Button>
        <ArrowRight onClick={handleRight} />
      </Button>
    </Box>
  )
}

export default PhotoCarousel