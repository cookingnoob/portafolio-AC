import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { aboutContainer, aboutTextContainer, aboutTextBox, aboutText, aboutButton, aboutImageContainer } from '../theme';

const About = () => {
  const [more, setMore] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={aboutContainer(theme)}>
      <Box sx={aboutTextContainer(theme)}>
        <Box sx={aboutTextBox(theme)}>
          <Typography variant='h6' color={'primary'}>About me</Typography>
        </Box>
        <Box sx={aboutTextBox(theme)}>
          {more ? (
            <>
              <Box display={'flex'} flexDirection={'column'} marginBottom={'80px'}>
                <Typography sx={aboutText(theme)}>
                  My name is Alan Coste, I have a Bachelor’s degree on Communications. I developed valuable skills such as researching and verification of information, understanding who is the audience and tailor a message for their needs without sacrificing the integrity of the concept.
                  <br />
                  <br />
                  I’m highly driven to learn and solve problems which is why my professional background is so diverse. As a freelance photographer my main focus was to deliver editorial magazine quality images. I achieved this with a deep understanding of lighting, on set modifications and image editing with Photoshop.
                  <br />
                  <br />
                  During Covid I got into food business selling homemade gourmet products and cooking experiences for up to 10 people. This was possible thanks to research the best recipes and techniques to ensure a high quality product.
                  <br />
                  <br />
                  My expectations working on software development are to overcome hard problems, work with my team to deliver the most value as possible and to keep learning and growing in the tech world.
                </Typography>
                <Button onClick={() => setMore(false)} sx={aboutButton(theme)}>Less info</Button>
              </Box>
            </>
          ) : (
            <>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography sx={aboutText(theme)} fontSize={'35px'}>
                  I’m a communicator transitioning to coding. I’m highly driven to solve problems as a team player. Research and critical thinking is how I reach solutions.
                </Typography>
                <Button onClick={() => setMore(true)} sx={aboutButton(theme)}>More info</Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box sx={aboutImageContainer(theme)}>
        <img src='https://res.cloudinary.com/di6vnxokz/image/upload/v1718081089/portafolio-2024/algk15cdwqieoyavevwm.png' height={'700px'} />
      </Box>
    </Box>
  );
}

export default About;
