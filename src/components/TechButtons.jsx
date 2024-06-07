import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { programmingExp } from '../data/programming'

const TechButtons = ({ project, setProjects }) => {
  const handleFilter = (tech) => {
    setProjects(programmingExp.filter(p => p.tech.includes(tech)))
  }
  return (
    <Box display={'flex'} >
      {project.tech.map((t, index) => (
        <Button size='small' key={`${t}-${index}`} variant='outlined' onClick={() => handleFilter(t)}>
          <br />
          <Typography color={'primary.dark'} fontSize={'10px'}>{t}</Typography>
        </Button>
      ))}
    </Box>
  )
}

export default TechButtons