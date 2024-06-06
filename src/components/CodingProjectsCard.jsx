import { Box, Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { programmingExp } from '../data/programming'
import Microlink from '@microlink/react'

const CodingProjectsCard = () => {
  const [projects, setProjects] = useState(programmingExp)


  const handleFilter = (tech) => {
    setProjects(programmingExp.filter(p => p.tech.includes(tech)))
  }
  return (
    //all cards container
    <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} height={'80vh'} width={'90vw'} overflow={'scroll'} gap={'10px'} padding={'5px'}>
      {projects.map((p, index) => (
        //individual card
        <Box key={`${p}-${index}`} display={'flex'} flexDirection={'column'} bgcolor={'primary.main'} height={'300px'} padding={'5px'}>
          <Typography color={'primary.dark'}>{p.title}</Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} >
            {p.tech.map((t, index) => (
              <Button size='small' key={`${t}-${index}`} variant='outlined' onClick={() => handleFilter(t)}>
                <br />
                <Typography color={'primary.dark'} fontSize={'10px'}>{t}</Typography>
              </Button>
            ))}

          </Box>
          <br />
          <Box height={'100px'}>
            <Typography variant='parragraph' color={'primary.dark'} fontSize={'12px'}>{p.description}</Typography>

          </Box>
          <Microlink url={p.projectUrl} lazy={{ threshold: 0.5 }} fetchData />
          <Box display={'flex'} >
            <Typography color={'primary.dark'}>Repo:</Typography>
            <Link href={`${p.repository}`}>
              <img width={'40px'} height={'40px'} src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CodingProjectsCard