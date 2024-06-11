import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Microlink from '@microlink/react'
import { TikTokEmbed } from 'react-social-media-embed';
import ReelModal from '../components/ReelModal';
import { creativeProjects, reels } from '../data/creative';
import Photography from '../components/Photography';
import PhotoCarousel from '../components/PhotoCarousel';
import { codingProjectsContainer, theme } from '../theme';

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
        <Box sx={codingProjectsContainer(theme)}>
          {reels.map((r, index) => (
            <ReelModal key={`${r}-${index}`} reel={r} index={index} />
          ))}
        </Box>
      }

      {displayContent !== 'photography' ?
        <></> :
        <Box sx={codingProjectsContainer(theme)}>
          {creativeProjects.map((p, index) => (
            <Photography key={`${p}-${index}`} photo={p} index={index} />
          ))}
        </Box>
      }

    </Box>
  )
}

export default Creative
