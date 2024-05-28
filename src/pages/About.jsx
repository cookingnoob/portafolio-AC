import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
      width={'100vw'}
      bgcolor={'primary.dark'}>
      <Box display={'flex'} width={'70vw'}>
        <Typography variant='h6' color={'primary'}>About me</Typography>
      </Box>
      <Box width={'70vw'}>
        <Typography color={'primary'} fontSize={'30px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime nisi voluptatibus soluta, repellendus fugiat facilis sequi distinctio commodi recusandae nostrum nam. Autem, odio? Debitis nam iure optio sunt eius?</Typography>
      </Box>
    </Box>
  )
}

export default About