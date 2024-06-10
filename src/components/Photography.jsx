import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import { TikTokEmbed } from 'react-social-media-embed'
import { modalStyle } from '../theme';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { creativeProjects } from '../data/creative';
import { Carousel } from 'react-responsive-carousel';

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
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <img src={`${photo.imageUrl}`} height={'300px'} width={'300px'} onClick={handleOpen} style={{ cursor: 'pointer' }} />
      <Button onClick={handleOpen}>{photo.title}</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display={'flex'} width={'100vw'} alignItems={'center'} justifyContent={'center'}>

          <Button onClick={() => setImageOnModal(creativeProjects[index - 1].imageUrl)}>
            <ArrowLeft />
          </Button>

          <img src={`${imageOnModal}`} height={'800px'} onClick={handleClose} style={{ cursor: 'pointer' }} />

          <Button>
            <ArrowRight onClick={(() => {
              creativeProjects.map((p, i) => console.log(`indice del array: ${i}`))
              console.log(`indice de la imagen que se le hizo clic ${index}`)
              const newIndex = index + 1
              setIndexEmbedded(newIndex)
              setImageOnModal(creativeProjects[newIndex].imageUrl)
              console.log(`indice despues de tocar la flecha o sea el actual ${newIndex}`)
            })} />
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}

export default Photography