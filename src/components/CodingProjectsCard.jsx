import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { programmingExp } from '../data/programming'



const CodingProjectsCard = () => {

  return (
    <>
      <p>probando</p>
      <button>Typescript</button>
      {programmingExp.map((p, index) => (
        <Box key={`${p}-${index}`}>
          {p.tech.map((t, index) => (
            <Button key={`${t}-${index}`}>{t}</Button>
          ))}
        </Box>
      ))}
    </>
  )
}

export default CodingProjectsCard