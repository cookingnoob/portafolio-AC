import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F1F1F1',
      dark: '#242424'
    },
    secondary: {
      main: '#DD4040'
    },
    background: {
      default: '#242424'
    },
  },
  typography: {
    fontFamily: 'Didot',
  }

})

export const codingProjectCard = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'primary.main',
  height: '300px',
  padding: '5px',
};

export const codingProjectsContainer = theme => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  height: '80vh',
  width: '90vw',
  overflow: 'scroll',
  gap: '10px',
  padding: '5px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});