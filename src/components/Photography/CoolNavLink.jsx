import React from 'react'
import { StyledNavLink, StyledTypography, navBarLinks } from '../../theme'

const CoolNavLink = ({ url, name, styleType }) => {
  return (
    <StyledNavLink to={url}>
      <StyledTypography sx={styleType}>{name}</StyledTypography>
    </StyledNavLink>
  )
}

export default CoolNavLink