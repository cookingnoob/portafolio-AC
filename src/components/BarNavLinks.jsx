import { Box, Menu, MenuItem, MenuList, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavLink, StyledTypography, navBarLinks, theme } from '../theme'
import { MenuOpen } from '@mui/icons-material'

const BarNavLinks = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (isMobile) {
    return (
      <div>

        <Typography
          aria-controls={open ? 'mobile-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ cursor: 'pointer' }}
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