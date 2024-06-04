import React from 'react'
import Microlink from '@microlink/react'
import { Box, Typography } from '@mui/material'

const Programming = () => {
  return (
    <>
      {/* tech template
      HTML
      CSS
      JS
      React
      Node y express */}
      <Typography variant='h1' color={'primary'}>React:</Typography>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} justifyContent={'center'}>
        {/* project card */}
        <Box>
          <Typography variant='h3' color={'primary'}>Weather app</Typography>
          <Typography color={'primary'}>React app that fetches information from weatherAPI. It gets local weather with users permission. There is a dynamic image for the background to ilustrate hows the current climate. User can check 5 different cities for their current weather or within 5 days. It is deployed on Netlify</Typography>
          <Microlink url='https://rtc-weatherapp.netlify.app/' media='screenshot' />
        </Box>

        <Microlink url=' https://marvelous-gelato-277f04.netlify.app/' media='screenshot' />
        <Microlink url='https://rtc-games.netlify.app' media='screenshot' />
        <Microlink url='https://rtc-nasa-alan-coste.netlify.app' media='screenshot' />
      </Box>
      <Typography variant='h1' color={'primary'}>Nodejs | Express:</Typography>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} justifyContent={'center'}>
        <Microlink url='https://rtc-backend3.onrender.com' />
        <Microlink url=' https://github.com/cookingnoob/rtc-backend2' media='logo' />
        <Microlink url='https://github.com/cookingnoob/rtc-final-server' media='logo' />
        <Microlink url='https://github.com/cookingnoob/rtc-backend1' media='logo' />
      </Box>
      <Typography variant='h1' color={'primary'}>HTML5 || CSS</Typography>
      <Box>
        <Microlink url='https://github.com/cookingnoob/odin-recipes' />
        <Microlink url='https://github.com/cookingnoob/admin-dashboard-odin' />
        <Microlink url='https://github.com/cookingnoob/landing-page-top-flexbox' />
        <Microlink url=' https://github.com/cookingnoob/web-responsive-rtc' />
        <Microlink url='  https://github.com/cookingnoob/sign-up-form-odin' />


      </Box>
      <Typography variant='h1' color={'primary'}>Javascript</Typography>
      <Box>
        <Microlink url='https://github.com/cookingnoob/rtc-tienda' />
        <Microlink url='https://github.com/cookingnoob/rtc-vite-portafolio' />
        <Microlink url='https://github.com/cookingnoob/calculator' />
        <Microlink url='https://github.com/cookingnoob/etch-a-sketch' />
        <Microlink url=' https://github.com/cookingnoob/rockpaperscissors' />


      </Box>
      <Typography variant='h1' color={'primary'}>Typescript</Typography>
      <Box>
        <Microlink url='https://github.com/cookingnoob/rtc-react-styles-tests-typescript' />
        <Microlink url='https://github.com/cookingnoob/libraryOdin' />
        <Microlink url='https://github.com/cookingnoob/calculator' />
      </Box>

    </>

  )
}

export default Programming