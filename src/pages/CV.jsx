import React, { useState } from 'react'
import { education, jobExperience } from '../data/cv'
import { Box, Button, List, ListItem, Typography } from '@mui/material'
import { Circle } from '@mui/icons-material'
import CVCards from '../components/CVCards'

const CV = () => {
  const [content, setContent] = useState(false)
  return (

    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} bgcolor={'primary.dark'}>
      <Box width={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button onClick={() => setContent(false)}>Job Experience</Button>
        <Button onClick={() => setContent(true)}>Education</Button>
      </Box>
      {content === false ?
        <Box >
          <Typography color={'primary'}>Professional Experience: </Typography>
          {jobExperience.map((j, i) => (
            <CVCards key={`${j}-${i}`} title={j.position} date={j.time} descriptions={j.description} />

          ))}
        </Box>
        : <></>}

      {content === true ?
        <Box>
          <Typography color={'primary'}>Education: </Typography>
          {education.map((e, i) => (
            <CVCards key={`${e}-${i}`} title={e.title} institution={e.institution} date={e.time} descriptions={e.description} />
          ))}
        </Box>
        :
        <></>
      }
    </Box>
  )
}

export default CV