import React from 'react'
import NameTitle from '../components/NameTitle'
import { Box, Typography } from '@mui/material'

const Welcome = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <NameTitle />
      <Typography variant='h1'>Lorem</Typography>
      <Typography variant='h1' color={'rgba(221, 64, 64, 1)'}>Lorem</Typography>
      <Typography variant='h1' color={'rgba(221, 64, 64, 1)'}>Lorem</Typography>
      <Typography variant='h1'>Lorem</Typography>
      <Typography variant='h1'>Lorem</Typography>
    </Box>
  )
}

export default Welcome