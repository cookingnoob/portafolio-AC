import { Box, Button, Modal } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { TikTokEmbed } from 'react-social-media-embed'
import { modalStyle } from '../theme';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { creativeProjects } from '../data/creative';
import { Carousel } from 'react-responsive-carousel';
import PhotoCarousel from './PhotoCarousel';


const LazyImages = lazy(() => import('./LazyImages'));

const Photography = ({ photo, index }) => {
  const [open, setOpen] = useState(false);
  const [imageOnModal, setImageOnModal] = useState(null)
  const [indexEmbedded, setIndexEmbedded] = useState(null)
  const handleOpen = () => {
    setIndexEmbedded(index)
    setImageOnModal(photo.imageUrl)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);


  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'300px'} width={'300px'} onClick={handleOpen} style={{ cursor: 'pointer' }} >
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyImages src={`${photo.imageUrl}`} sizeImg={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Suspense>

      <Button onClick={handleOpen}>{photo.title}</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <PhotoCarousel index={index} onClick={handleClose} />
        </Box>
      </Modal>
    </Box>
  )
}

export default Photography