import React from 'react'
import Microlink from '@microlink/react'
import { Box, Button, Typography } from '@mui/material'
import CodingProjectsCard from '../components/CodingProjectsCard'

const Programming = () => {
  return (
    <>
      <Typography color={'primary'}>PROGRAMMING PROJECTS</Typography>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <CodingProjectsCard />
      </Box>
    </>

  )
}

export default Programming