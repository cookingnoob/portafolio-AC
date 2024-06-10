import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Microlink from '@microlink/react'
import { TikTokEmbed } from 'react-social-media-embed';
import ReelModal from '../components/ReelModal';
import { creativeProjects, reels } from '../data/creative';
import Photography from '../components/Photography';
import PhotoCarousel from '../components/PhotoCarousel';

const Creative = () => {

  const [displayContent, setDisplayContent] = useState(null)

  return (
    <Box
      bgcolor={'primary.dark'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >

      <Box >
        <Button onClick={() => setDisplayContent('tiktok')}>tiktok</Button>
        <Button onClick={() => setDisplayContent('photography')}>Photography</Button>
      </Box>

      {displayContent !== 'tiktok' ? <></> :
        <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={'30px'}>
          {reels.map((r, index) => (
            <ReelModal key={`${r}-${index}`} reel={r} index={index} />
          ))}
        </Box>
      }

      {displayContent !== 'photography' ?
        <></> :
        <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={'10px'}>
          {creativeProjects.map((p, index) => (
            <Photography key={`${p}-${index}`} photo={p} index={index} />
          ))}
        </Box>
      }
    </Box>
  )
}

export default Creative
