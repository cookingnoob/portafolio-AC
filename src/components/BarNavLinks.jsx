import { Box, Menu, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavLink, StyledTypography, navBarLinks, theme } from '../theme'

const BarNavLinks = () => {
  return (
    <MenuList >
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'}>
        <MenuItem>
          <StyledNavLink to={'/home'}>
            <StyledTypography sx={navBarLinks(theme)}>Home</StyledTypography>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to={'/programming'}>
            <StyledTypography sx={navBarLinks(theme)}>Programming</StyledTypography>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to={'/creative'}>
            <StyledTypography sx={navBarLinks(theme)}>Creative</StyledTypography>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to={'/about'}>
            <StyledTypography sx={navBarLinks(theme)}>About</StyledTypography>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to={'/cv'}>
            <StyledTypography sx={navBarLinks(theme)}>CV</StyledTypography>
          </StyledNavLink>
        </MenuItem>
      </Box>
    </MenuList>
  )
}

export default BarNavLinks