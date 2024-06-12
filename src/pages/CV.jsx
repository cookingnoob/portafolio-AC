import React from 'react'
import { education, jobExperience } from '../data/cv'
import { Box, List, ListItem, Typography } from '@mui/material'
import { Circle } from '@mui/icons-material'

const CV = () => {

  return (
    <Box display={'flex'} >
      <Box >
        <Typography color={'primary'}>Professional Experience: </Typography>
        {jobExperience.map((j, i) => (
          <Box key={`${j}-${i}`} display={'flex'} flexDirection={'column'} marginBottom={'10px'}>
            <Typography color={'primary'} variant='h6' marginTop={'20px'}>{j.position}</Typography>
            <Typography color={'primary'}>{j.time}</Typography>
            {j.description.map((d, i) => (
              <Box key={`${d}-${i}`} display={'flex'}>
                <Circle color='primary' sx={'height: 5px'} />
                <Typography color={'primary'} marginLeft={'5px'} fontSize={'14px'}>{d}</Typography>
              </Box >
            ))}
          </Box>
        ))}

      </Box>
      <Box>
        <Typography color={'primary'}>Education: </Typography>

        {education.map((e, i) => (
          <Box key={`${e}-${i}`} display={'flex'} flexDirection={'column'}>
            <Typography color={'primary'} variant='h6' marginTop={'20px'}>{e.title}</Typography>
            <Typography color={'primary'}>{e.institution}</Typography>
            <Typography color={'primary'}>{e.time}</Typography>
            <Typography color={'primary'}>{e.description}</Typography>
          </Box>
        ))}

      </Box>
    </Box>
  )
}

export default CV