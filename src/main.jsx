import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, useTheme } from '@emotion/react'
import { createTheme } from '@mui/material'

const theme = createTheme({
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
