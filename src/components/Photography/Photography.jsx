import { Box, Button, Modal, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import PhotoCarousel from './PhotoCarousel';
import { modalStylePhoto, photoCard } from '../../theme';



const LazyImages = lazy(() => import('./LazyImages'));

const Photography = ({ photo, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box>
      <Box style={{ cursor: 'pointer' }} onClick={handleOpen} sx={photoCard}>
        <Box height={'350px'} width={'350px'}>

          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyImages src={`${photo.imageUrl}`} sizeImg={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Suspense>
        </Box>
        <Button onClick={handleOpen}>{photo.title}</Button>
      </Box>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStylePhoto}>
          <PhotoCarousel index={0} />
        </Box>
      </Modal>
    </Box>
  )
}

export default Photography