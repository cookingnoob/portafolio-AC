import { Box, Typography } from '@mui/material'
import React from 'react'

const Work = () => {
  return (
    <Box bgcolor={'primary.dark'}
      height={'100vh'}
      width={'100vw'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      padding={'10px'}>
      <Typography variant='h6' color={'primary'}>My work</Typography>
      <Typography variant='h1' color={'primary'}>PROGRAMMING</Typography>
      <Typography variant='h1' color={'primary'}>PHOTOGRAPHY</Typography>
      <Typography variant='h1' color={'primary'}>COOKING</Typography>
      <Typography variant='h1' color={'primary'}>CV</Typography>
    </Box>
  )
}

export default Work