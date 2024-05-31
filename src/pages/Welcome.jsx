import React from 'react'

import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import NavLinks from '../components/NavLinks'

const Welcome = () => {

  return (

    <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}>

      <Typography variant='h5' color={'primary'} fontSize={'30px'}>Alan Coste</Typography>
      <NavLink to={'/programming'}>
        <Typography variant='h1' color={'primary'} fontSize={'100px'}>PROGRAMMING</Typography>
      </NavLink>
      <NavLink to='/creative'>
        <Typography variant='h1' color={'secondary'} fontSize={'100px'}>CREATIVE</Typography>
      </NavLink>
      <NavLink to='/about'>
        <Typography variant='h1' color={'secondary'} fontSize={'100px'}>ABOUT</Typography>
      </NavLink>
      <NavLink to={'/cv'}>
        <Typography variant='h1' color={'primary'} fontSize={'100px'}>CV</Typography>
      </NavLink>
    </Box>

  )
}

export default Welcome