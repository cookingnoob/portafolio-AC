import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Photography from './pages/Photography.jsx'
import About from './pages/About.jsx'
import Welcome from './pages/Welcome.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/home' index element={<Welcome />} />
            <Route path='creative' element={<Photography />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
