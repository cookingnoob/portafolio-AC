import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { TikTokEmbed } from 'react-social-media-embed';
import { modalStyle } from '../theme';
import { ArrowLeft } from '@mui/icons-material';
import { reels } from '../data/creative';
const LazyImages = lazy(() => import('./Photography/LazyImages'));


const ReelModal = ({ reel, index }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box onClick={handleOpen} style={{ cursor: 'pointer' }} height={'600px'} width={'400px'}>
        <Suspense fallback={<CircularProgress sx={{ margin: 'auto' }} />}>
          <LazyImages src={`${reel.coverImg}`} sizeImg={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Suspense>
      </Box>

      <Button onClick={handleOpen}>{reel.title}</Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'600px'}>
          <TikTokEmbed url={reel.reelUrl} width={'325px'} height={'600px'} />
        </Box>
      </Modal>

    </Box>
  )
}

export default ReelModal

