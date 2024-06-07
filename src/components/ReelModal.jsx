import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TikTokEmbed } from 'react-social-media-embed';
import { modalStyle } from '../theme';

const ReelModal = ({ reel }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <img src={`${reel.coverImg}`} height={'400px'} onClick={handleOpen} style={{ cursor: 'pointer' }} />
      <Button onClick={handleOpen}>{reel.title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TikTokEmbed url={reel.reelUrl} width={325} />
        </Box>
      </Modal>
    </Box>
  )
}

export default ReelModal

