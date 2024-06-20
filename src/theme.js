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

export const welcomeContainer = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
});

export const welcomeTypography = (theme) => ({
  fontSize: '30px',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginLeft: '10px',
    marginTop: '60%'
  },
});

export const welcomeNavLink = (theme) => ({
  fontSize: '100px',
  marginLeft: '10px',
  [theme.breakpoints.down('md')]: {
    fontSize: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
  },
});

export const navBarLinks = (theme) => ({
  fontSize: '12px',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    color: '#F1F1F1',
    fontSize: '15px',
  },
});
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
    color: #DD4040; 
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

export const codingProjectCard = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  height: '300px',
  padding: '5px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: '10px',
  },
});

export const codingProjectsContainer = (theme) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
  height: '90vh',
  width: '100vw',
  overflowY: 'scroll',
  gap: '10px',
  padding: '5px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
    width: '90vw'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1,minmax(200px, 1fr))',
    width: '90vw',
  },
});

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  bgcolor: 'rgba(241, 241, 241, .5)',
  [theme.breakpoints.down('sm')]: {
    height: '80vh',
    width: '80vw'
  },
};


export const modalStylePhoto = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'rgba(241, 241, 241, .5)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: '80vw',
  height: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
};

export const photoCard = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  width: '400px',
}

export const reelImage = {
  height: '600px',
  width: '400px',

};


export const aboutContainer = (theme) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.main,


  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
});

export const aboutTextContainer = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60vw',
  gap: '10px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
    width: '100%',
  },
});

export const aboutTextBox = () => ({
  display: 'flex',
  width: '60vw',
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
});

export const aboutText = (theme) => ({
  color: theme.palette.primary.main,
  fontSize: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
});

export const aboutButton = (theme) => ({
  color: theme.palette.primary.main,
});

export const aboutImageContainer = (theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50vw',
  img: {
    maxHeight: '500px',
    width: '100%',
    objectFit: 'contain',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    img: {
      height: 'auto',
      maxHeight: '400px',
      width: '100%',
      objectFit: 'contain',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    img: {
      height: 'auto',
      maxHeight: '300px',
      width: '100%',
      objectFit: 'contain',
    },
  },
});
