import { Box, Typography } from '@mui/material'
import React from 'react'

const CVCards = ({ title, date, descriptions }) => {
  return (
    <Box width={'60vw'} padding={'10px'} >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography color={'primary'}>{title}</Typography>
        <Typography color={'primary'}>{date}</Typography>
      </Box>
      <Box width={'70vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={'10px'}>
        <Box display={'flex'} flexDirection={'column'} width={'50vw'}>
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