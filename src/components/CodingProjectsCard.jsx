import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { programmingExp } from '../data/programming'
import Microlink from '@microlink/react'

const CodingProjectsCard = () => {

  return (
    <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} height={'70vh'} width={'90vw'} gap={'10px'} padding={'5px'}>
      {programmingExp.map((p, index) => (
        <Box key={`${p}-${index}`} bgcolor={'primary.main'} height={'300px'}>
          <Typography color={'primary.dark'}>{p.title}</Typography>
          {p.tech.map((t, index) => (
            <Button key={`${t}-${index}`} size='20px' >
              <br />
              <Typography color={'primary.dark'}>{t}</Typography>
            </Button>
          ))}
          <br />
          <Typography variant='parragraph' color={'primary.dark'} fontSize={'12px'}>{p.description}</Typography>
          <Microlink url={p.projectUrl} lazy={{ threshold: 0.5 }} fetchData />

        </Box>
      ))}
    </Box>
  )
}

export default CodingProjectsCard