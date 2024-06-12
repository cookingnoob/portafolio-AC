import React from 'react'
import { education, jobExperience } from '../data/cv'
import { Box, List, ListItem, Typography } from '@mui/material'

const CV = () => {

  return (
    <Box display={'flex'}>
      <Box>
        <Typography>Professional Experience: </Typography>
        <List>
          {jobExperience.map((j, i) => (
            <ListItem key={`${j}-${i}`}>
              <Typography>{j.position}</Typography>
              <Typography>{j.time}</Typography>
              {j.description.map((d, i) => (
                <Typography key={`${d}-${i}`}>{d}</Typography>
              ))}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography>Professional Experience: </Typography>
        <List>
          {education.map((e, i) => (
            <ListItem key={`${e}-${i}`}>
              <Typography>{e.title}</Typography>
              <Typography>{e.institution}</Typography>
              <Typography>{e.time}</Typography>
              <Typography>{e.description}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default CV