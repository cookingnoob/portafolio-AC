import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CodingProjectsCard from '../components/CodingProjectsCard';
import { StyledNavLink, StyledTypography } from '../theme';
import { welcomeContainer, welcomeTypography, welcomeNavLink } from '../theme';

const Welcome = () => {
  const theme = useTheme();

  return (
    <Box sx={welcomeContainer(theme)}>
      <Typography variant='h5' color={'primary'} sx={welcomeTypography(theme)}>Alan Coste</Typography>

      <StyledNavLink to={'/programming'} >
        <StyledTypography variant='h1' sx={welcomeNavLink(theme)}>PROGRAMMING</StyledTypography>
      </StyledNavLink>

      <StyledNavLink to='/creative'>
        <StyledTypography variant='h1' sx={welcomeNavLink(theme)}>CREATIVE</StyledTypography>
      </StyledNavLink>

      <StyledNavLink to='/about'>
        <StyledTypography variant='h1' sx={welcomeNavLink(theme)}>ABOUT</StyledTypography>
      </StyledNavLink>

      <StyledNavLink to={'/cv'}>
        <StyledTypography variant='h1' sx={welcomeNavLink(theme)}>CV</StyledTypography>
      </StyledNavLink>
    </Box>
  );
}

export default Welcome;
