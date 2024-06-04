import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'10rem'}>
      <Box display={'flex'} width={'70vw'}>
        <Typography variant='h6' color={'primary'}>About me</Typography>
      </Box>
      <Box width={'70vw'}>
        <Typography color={'primary'} fontSize={'35px'}>I’m a communicator transitioning to coding. I’m highly driven to solve problems as a team player. Research and critical thinking is how I reach solutions.</Typography>
      </Box>
    </Box>
  )
}

export default About