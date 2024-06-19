import { Box, Menu, MenuItem, MenuList, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavLink, StyledTypography, navBarLinks, theme } from '../theme'
import { MenuOpen } from '@mui/icons-material'
import DropDownLinks from './DropDownLinks'
import CoolNavLink from './Photography/CoolNavLink'

const BarNavLinks = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      {isMobile || isTablet ? (<DropDownLinks />) :

        (
          <MenuList >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'}>
              <MenuItem>
                <CoolNavLink url={'/home'} name={'Home'} styleType={navBarLinks(theme)} />
                {/* <StyledNavLink to={'/home'}>
                  <StyledTypography sx={navBarLinks(theme)}>Home</StyledTypography>
                </StyledNavLink> */}
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
    </>
  )
}

export default BarNavLinks