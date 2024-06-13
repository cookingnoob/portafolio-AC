import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TikTokEmbed } from 'react-social-media-embed';
import { modalStyle } from '../theme';
import { ArrowLeft } from '@mui/icons-material';
import { reels } from '../data/creative';

const ReelModal = ({ reel, index }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box display={'flex'} flexDirection={'column'}>
      <img src={`${reel.coverImg}`} onClick={handleOpen} style={{ cursor: 'pointer' }} />
      <Button onClick={handleOpen}>{reel.title}</Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'600px'}>
          <TikTokEmbed url={reel.reelUrl} width={325} height={'600px'} />
        </Box>
      </Modal>

    </Box>
  )
}

export default ReelModal

