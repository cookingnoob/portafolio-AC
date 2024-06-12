import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavLink, StyledTypography } from '../theme'

const BarNavLinks = () => {
  return (
    <Box padding={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'}>
      <StyledNavLink to={'/home'}>
        <StyledTypography fontSize={'12px'} color={'primary'}>Home</StyledTypography>
      </StyledNavLink>
      <StyledNavLink to={'/programming'}>
        <StyledTypography fontSize={'12px'} color={'primary'}>Programming</StyledTypography>
      </StyledNavLink>
      <StyledNavLink to={'/creative'}>
        <StyledTypography fontSize={'12px'} color={'primary'}>Creative</StyledTypography>
      </StyledNavLink>
      <StyledNavLink to={'/about'}>
        <StyledTypography fontSize={'12px'} color={'primary'}>About</StyledTypography>
      </StyledNavLink>
      <StyledNavLink to={'/cv'}>
        <StyledTypography fontSize={'12px'} color={'primary'}>CV</StyledTypography>
      </StyledNavLink>
    </Box>
  )
}

export default BarNavLinks