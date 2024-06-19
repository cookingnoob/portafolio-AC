import React, { useState } from 'react'
import { Menu, MenuItem, MenuList, Typography } from '@mui/material'
import { MenuOpen } from '@mui/icons-material'
import { StyledNavLink, StyledTypography, navBarLinks, theme } from '../theme'

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
    <div>

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
          <MenuItem onClick={handleClose}>
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
        </MenuList>
      </Menu>
    </div>
  )
}

export default DropDownLinks



