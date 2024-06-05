import React from 'react'
import Microlink from '@microlink/react'
import { Box, Typography } from '@mui/material'

const Programming = () => {
  return (
    <>

      <Typography variant='h1' color={'primary'}>React:</Typography>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} justifyContent={'center'}>
        {/* project card */}
        <Box>
          <Typography variant='h3' color={'primary'}>Weather app</Typography>
          <Typography color={'primary'}>React app that fetches information from weatherAPI. It gets local weather with users permission. There is a dynamic image for the background to ilustrate hows the current climate. User can check 5 different cities for their current weather or within 5 days. It is deployed on Netlify</Typography>
          <Microlink url='https://rtc-weatherapp.netlify.app/' media='screenshot' />
          <Microlink url='https://github.com/cookingnoob/rtc-react-weatherApp' />
        </Box>

      </Box>


    </>

  )
}

export default Programming