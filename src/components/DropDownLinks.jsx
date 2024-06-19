import React, { useState } from 'react'
import { Menu, MenuItem, MenuList, Typography } from '@mui/material'
import { MenuOpen } from '@mui/icons-material'
import { StyledNavLink, StyledTypography, navBarLinks, theme } from '../theme'
import CoolNavLink from './Photography/CoolNavLink'

const DropDownLinks = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>

      <Typography
        aria-controls={open ? 'mobile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
        color={'primary'}
      >
        <MenuOpen />
      </Typography>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuList>
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

        </MenuList>
      </Menu>
    </>
  )
}

export default DropDownLinks



