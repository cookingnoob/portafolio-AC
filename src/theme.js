import { Typography, createTheme, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

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

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #F1F1F1;
  &:hover {
    animation: colorChange 1s forwards;
  }
  @keyframes colorChange {
    from {
      color: #F1F1F1;
    }
    to {
      color: #DD4040; /* Cambia este color por el que desees */
    }
  }
`;

export const StyledTypography = styled(Typography)`

  color: inherit;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #F1F1F1 50%, #DD4040 50%);
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover::after {
    left: 100%;
  }
`;

export const modalStylePhoto = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const photoCard = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  width: '400px',

}