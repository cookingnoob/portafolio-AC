import React from 'react'
import NameTitle from '../components/NameTitle'
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
      <NameTitle />
      <Typography variant='h1' color={'primary'}>Lorem</Typography>
      <Typography variant='h1' color={'secondary'}>Lorem</Typography>
      <Typography variant='h1' color={'secondary'}>Lorem</Typography>
      <Typography variant='h1' color={'primary'}>Lorem</Typography>
      <Typography variant='h1' color={'primary'}>Lorem</Typography>
    </Box>
  )
}

export default Welcome