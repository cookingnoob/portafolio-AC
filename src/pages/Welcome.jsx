import React from 'react'

import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

const Welcome = () => {
  const theme = useTheme()
  return (
    <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
      width={'100vw'}
      bgcolor={'primary.dark'}>
      <Typography variant='h5' color={'primary'} fontSize={'30px'}>Alan Coste</Typography>
      <Typography variant='h1' color={'primary'} fontSize={'100px'}>PROGRAMMING</Typography>
      <Typography variant='h1' color={'secondary'} fontSize={'100px'}>CREATIVE</Typography>
      <Typography variant='h1' color={'secondary'} fontSize={'100px'}>ABOUT</Typography>
      <Typography variant='h1' color={'primary'} fontSize={'100px'}>CV</Typography>
    </Box>
  )
}

export default Welcome