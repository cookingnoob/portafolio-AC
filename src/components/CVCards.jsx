import { Box, Typography } from '@mui/material'
import React from 'react'

const CVCards = ({ title, date, descriptions }) => {
  return (
    <Box width={'60vw'} padding={'10px'} >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography color={'primary'}>Freelance Photographer</Typography>
        <Typography color={'primary'}>2018-PRESENT DAY</Typography>
      </Box>
      <Box width={'70vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={'10px'}>
        <Box display={'flex'} flexDirection={'column'} width={'50vw'}>
          <Typography color={'primary'}>Real State photography and magazine quality Food Photography</Typography>
          <br />
          <Typography color={'primary'}>Achieve high quality image from camera with deep knowledge of lightning, camera gear, on site modifications such as food styling</Typography>
          <br />
          <Typography color={'primary'}>Post processing of images with Photoshop, enhancing image appeal without loosing credibility</Typography>
        </Box>
      </Box>
    </Box>
  )
}
/* Rectangle 12 */

// position: absolute;
// width: 1046px;
// height: 423px;
// left: 117px;
// top: 108px;

// background: #242424;

export default CVCards