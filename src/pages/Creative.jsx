import { Box, Button } from '@mui/material'
import { useState } from 'react'
import ReelModal from '../components/ReelModal';
import { creativeProjects, reels } from '../data/creative';
import Photography from '../components/Photography';
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
