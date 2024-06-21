import React, { useState } from 'react'
import { education, jobExperience } from '../data/cv'
import { Box, Button, List, ListItem, Typography } from '@mui/material'
import { Circle } from '@mui/icons-material'
import CVCards from '../components/CVCards'

const CV = () => {
  const [content, setContent] = useState('job')
  return (

    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box width={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button onClick={() => setContent('job')}>Job Experience</Button>
        <Button onClick={() => setContent('education')}>Education</Button>
      </Box>
      {content === 'job' ?
        <Box >
          <Typography color={'primary'}>Professional Experience: </Typography>
          {jobExperience.map((j, i) => (
            <CVCards key={`${j}-${i}`} title={j.position} date={j.time} descriptions={j.description} />

          ))}
        </Box>
        : <></>}

      {content === 'education' ?
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