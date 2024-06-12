
import { Box, Typography } from '@mui/material'

import { NavLink } from 'react-router-dom'
import CodingProjectsCard from '../components/CodingProjectsCard'
import { StyledNavLink, StyledTypography } from '../theme'



const Welcome = () => {

  return (

    <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}>

      <Typography variant='h5' color={'primary'} fontSize={'30px'}>Alan Coste</Typography>

      <StyledNavLink to={'/programming'} color='primary'>
        <StyledTypography variant='h1' fontSize={'100px'}>PROGRAMMING</StyledTypography>
      </StyledNavLink>

      <StyledNavLink to='/creative'>
        <StyledTypography variant='h1' fontSize={'100px'}>CREATIVE</StyledTypography>
      </StyledNavLink>

      <StyledNavLink to='/about'>
        <StyledTypography variant='h1' fontSize={'100px'}>ABOUT</StyledTypography>
      </StyledNavLink>

      <StyledNavLink to={'/cv'}>
        <StyledTypography variant='h1' fontSize={'100px'}>CV</StyledTypography>
      </StyledNavLink>

    </Box>


  )
}

export default Welcome