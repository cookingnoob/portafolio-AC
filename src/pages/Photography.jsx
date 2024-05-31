import { Box, Typography } from '@mui/material'
import React from 'react'
import NavLinks from '../components/NavLinks'

const Photography = () => {
  return (
    <Box height={'100vh'}
      width={'100vw'}
      bgcolor={'primary.dark'}>

      <Typography variant='h6' color={'primary'} paddingTop={'10px'} paddingLeft={'10px'} fontSize={'35px'}>Photography</Typography>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'90vh'}>
        <Box width={'40vw'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} >
          <Typography paddingLeft={'30px'} variant='h6' color={'primary'}>Skills</Typography>
          <Box paddingLeft={'150px'}>
            <Typography color={'primary'} fontSize={'40px'}>Skill one</Typography>
            <Typography color={'primary'} fontSize={'40px'}>Skill two</Typography>
            <Typography color={'primary'} fontSize={'40px'}>Skill three</Typography>
            <Typography color={'primary'} fontSize={'40px'}>Skill four</Typography>
            <Typography color={'primary'} fontSize={'40px'}>Skill five</Typography>
          </Box>
        </Box>
        <Box width={'60vw'}>
          <img src="../../public/steak.jpeg"
            alt="Ribeye steak with pomme pure and mushroom sauce"
            width={'800px'}
            height={'500px'} />
        </Box>
      </Box>
    </Box>
  )
}

export default Photography