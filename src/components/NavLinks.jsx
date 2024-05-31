import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
      <NavLink>
        <Typography>Home</Typography>
      </NavLink>
      <NavLink>
        <Typography>Programming</Typography>
      </NavLink>
      <NavLink>
        <Typography>Creative</Typography>
      </NavLink>
      <NavLink>
        <Typography>About</Typography>
      </NavLink>
      <NavLink>
        <Typography>CV</Typography>
      </NavLink>
    </>
  )
}

export default NavLinks