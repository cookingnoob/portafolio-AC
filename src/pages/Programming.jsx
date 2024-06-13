import React, { useState } from 'react'
import Microlink from '@microlink/react'
import { Box, Button, Typography } from '@mui/material'
import CodingProjectsCard from '../components/CodingProjectsCard'
import { programmingExp } from '../data/programming'

const Programming = () => {
  const [projects, setProjects] = useState(programmingExp)

  return (
    <>
      <Typography color={'primary'}>PROGRAMMING PROJECTS</Typography>
      {projects.length !== programmingExp.length ? <><Button onClick={() => setProjects(programmingExp)}>All Projects</Button> <br /> </> : <></>}
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <CodingProjectsCard projects={projects} setProjects={setProjects} />
      </Box>
    </>

  )
}

export default Programming