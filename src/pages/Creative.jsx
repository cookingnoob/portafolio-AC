import { Box, Typography } from '@mui/material'
import React from 'react'
import Microlink from '@microlink/react'
import { TikTokEmbed } from 'react-social-media-embed';

const Creative = () => {
  return (
    <Box height={'100vh'}
      width={'100vw'}
      bgcolor={'primary.dark'}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TikTokEmbed url="https://www.tiktok.com/@costealan/video/7115225211468795141" width={325} />
      </div>

      {/* 
      <blockquote className="tiktok-embed"
                 cite="https://www.tiktok.com/@costealan" 
                 data-unique-id="costealan" 
                 data-embed-from="embed_page" 
                 data-embed-type="creator" 
                 style="max-width:780px; min-width:288px;"> 
                 <section> 
                  <a target="_blank" href="https://www.tiktok.com/@costealan?refer=creator_embed">@costealan</a> 
                  </section> 
                  </blockquote>
                  <script async src="https://www.tiktok.com/embed.js"></script> */}

    </Box>
  )
}

export default Creative