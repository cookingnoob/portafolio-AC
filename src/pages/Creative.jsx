import { Box, Typography } from '@mui/material'
import React from 'react'
import Microlink from '@microlink/react'
import { TikTokEmbed } from 'react-social-media-embed';
import ReelModal from '../components/ReelModal';
import { reels } from '../data/creative';

const Creative = () => {

  reels.map(r => console.log(r))
  return (
    <Box
      bgcolor={'primary.dark'}
      display={'flex'}
      justifyContent={'center'}
    >
      <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={'30px'}>
        {reels.map((r, index) => (
          <ReelModal key={`${r}-${index}`} reel={r} />
        ))}
      </Box>

    </Box>
  )
}

export default Creative
