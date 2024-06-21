import { Box, Typography } from '@mui/material'
import React from 'react'

const CVCards = ({ title, date, descriptions, institution }) => {
  return (
    <Box width={'80vw'} bgcolor={'primary.dark'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography color={'primary'}>{title}</Typography>
          {institution && (
            <Typography color="primary">{institution}</Typography>
          )}
        </Box>
        <Typography color={'primary'}>{date}</Typography>
      </Box>
      <Box width={'80vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={'10px'}>
        <Box display={'flex'} flexDirection={'column'} width={'70vw'}>
          {descriptions.map((d, i) => (
            <Box key={`${i}`}>
              <Typography color={'primary'}>{d}</Typography>
              <br />
            </Box>
          ))}

        </Box>
      </Box>
    </Box>
  )
}


export default CVCards