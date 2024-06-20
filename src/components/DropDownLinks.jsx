import { useState } from 'react'
import { Menu, MenuItem, MenuList, Typography } from '@mui/material'
import { MenuOpen, MenuRounded } from '@mui/icons-material'
import { navBarLinks, theme } from '../theme'
import CoolNavLink from './CoolNavLink'


const DropDownLinks = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const open = Boolean(anchorEl)

  const handleOpen = (event) => {
    setIsClicked(true)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setIsClicked(false)
    setAnchorEl(null)
  }
  return (
    <>

      <Typography
        aria-controls={open ? 'mobile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        sx={{ cursor: 'pointer' }}
        color={'primary'}
      >
        {isClicked ? <MenuOpen /> : <MenuRounded />}
      </Typography>
      <Menu
        color='blue'
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
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: theme.palette.primary.dark,
          },
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



