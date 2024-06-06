import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import { programmingExp } from '../data/programming'
import Microlink from '@microlink/react'

const CodingProjectsCard = () => {

  return (
    <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} height={'80vh'} width={'90vw'} overflow={'scroll'} gap={'10px'} padding={'5px'}>
      {programmingExp.map((p, index) => (
        <Box key={`${p}-${index}`} bgcolor={'primary.main'} height={'300px'}>
          <Typography color={'primary.dark'}>{p.title}</Typography>
          {p.tech.map((t, index) => (
            <Button key={`${t}-${index}`} size='20px' variant='outlined'>
              <br />
              <Typography color={'primary.dark'} fontSize={'10px'}>{t}</Typography>
            </Button>
          ))}
          <br />
          <Typography variant='parragraph' color={'primary.dark'} fontSize={'12px'}>{p.description}</Typography>
          <Microlink url={p.projectUrl} lazy={{ threshold: 0.5 }} fetchData />
          <Link href={`${p.repository}`}>
            <img width={'20px'} height={'20px'} src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default CodingProjectsCard