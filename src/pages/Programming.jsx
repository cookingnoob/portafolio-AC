import React from 'react'
import Microlink from '@microlink/react'
import { Box } from '@mui/material'

const Programming = () => {
  return (

    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} justifyContent={'center'}>
      <Microlink url='https://rtc-weatherapp.netlify.app/' media='screenshot' />
      <Microlink url=' https://marvelous-gelato-277f04.netlify.app/' media='screenshot' />
      <Microlink url='https://rtc-games.netlify.app' media='screenshot' />
      <Microlink url='https://rtc-nasa-alan-coste.netlify.app' media='screenshot' />

    </Box>


  )
}

export default Programming