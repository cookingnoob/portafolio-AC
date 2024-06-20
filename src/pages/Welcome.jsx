import { Box, Typography, useTheme } from '@mui/material';
import { welcomeContainer, welcomeTypography, welcomeNavLink } from '../theme';
import CoolNavLink from '../components/CoolNavLink';

const Welcome = () => {
  const theme = useTheme();

  return (
    <Box sx={welcomeContainer(theme)}>
      <Typography variant='h5' color={'primary'} sx={welcomeTypography(theme)}>Alan Coste</Typography>
      <CoolNavLink url={'/programming'} name={'PROGRAMMING'} styleType={welcomeNavLink(theme)} />
      <CoolNavLink url={'/creative'} name={'CREATIVE'} styleType={welcomeNavLink(theme)} />
      <CoolNavLink url={'/about'} name={'ABOUT'} styleType={welcomeNavLink(theme)} />
      <CoolNavLink url={'/cv'} name={'CV'} styleType={welcomeNavLink(theme)} />
    </Box>
  );
}

export default Welcome;
