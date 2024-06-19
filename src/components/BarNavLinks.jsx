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
              </MenuItem>
              <MenuItem>
                <CoolNavLink url={'/programming'} name={'Programming'} styleType={navBarLinks(theme)} />
              </MenuItem>
              <MenuItem>
                <CoolNavLink url={'/creative'} name={'Creative'} styleType={navBarLinks(theme)} />
              </MenuItem>
              <MenuItem>
                <CoolNavLink url={'/about'} name={'About'} styleType={navBarLinks(theme)} />
              </MenuItem>
              <MenuItem>
                <CoolNavLink url={'/cv'} name={'CV'} styleType={navBarLinks(theme)} />
              </MenuItem>
            </Box>
          </MenuList>
        )
      }
    </>
  )
}

export default BarNavLinks