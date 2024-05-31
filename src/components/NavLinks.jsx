import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <Box padding={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'}>
      <NavLink to={'/home'}>
        <Typography fontSize={'12px'} color={'primary'}>Home</Typography>
      </NavLink>
      <NavLink to={'/programming'}>
        <Typography fontSize={'12px'} color={'primary'}>Programming</Typography>
      </NavLink>
      <NavLink to={'/creative'}>
        <Typography fontSize={'12px'} color={'primary'}>Creative</Typography>
      </NavLink>
      <NavLink to={'/about'}>
        <Typography fontSize={'12px'} color={'primary'}>About</Typography>
      </NavLink>
      <NavLink to={'/cv'}>
        <Typography fontSize={'12px'} color={'primary'}>CV</Typography>
      </NavLink>
    </Box>
  )
}

export default NavLinks