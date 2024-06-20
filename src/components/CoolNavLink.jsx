import React from 'react'
import { StyledNavLink, StyledTypography } from '../theme'
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'


const CoolNavLink = ({ url, name, styleType }) => {
  return (
    <NavLink to={url} className={'navLink'}>
      <Typography sx={styleType}>{name}</Typography>
    </NavLink>
  )
}

export default CoolNavLink