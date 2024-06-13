import { Box, Button, Link, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { programmingExp } from '../data/programming'
import Microlink from '@microlink/react'
import { codingProjectCard, codingProjectsContainer } from '../theme'
import TechButtons from './TechButtons'


const CodingProjectsCard = ({ projects, setProjects }) => {

  const theme = useTheme()



  return (
    //all cards container
    <>


      <Box sx={codingProjectsContainer(theme)}>

        {projects.map((p, index) => (
          //individual card
          <Box key={`${p}-${index}`} sx={codingProjectCard} >

            <Typography color={'primary.dark'}>{p.title}</Typography>
            {/* technology stack buttons */}

            <TechButtons project={p} setProjects={setProjects} />

            <br />
            {/* project description */}
            <Box height={'100px'}>
              <Typography variant='parragraph' color={'primary.dark'} fontSize={'12px'}>{p.description}</Typography>
            </Box>
            {/* project site  */}
            <Microlink url={p.projectUrl} lazy={{ threshold: 1 }} fetchData />
            {/* github repo */}
            <Box display={'flex'} >
              <Typography color={'primary.dark'}>Repo:</Typography>
              <Link href={`${p.repository}`}>
                <img width={'40px'} height={'40px'} src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
              </Link>
            </Box>

          </Box>
        ))}
      </Box>
    </>

  )
}

export default CodingProjectsCard