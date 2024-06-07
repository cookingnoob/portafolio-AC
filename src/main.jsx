import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Welcome from './pages/Welcome.jsx'
import Creative from './pages/Creative.jsx'
import Programming from './pages/Programming.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Navigate to="/home" replace />} />
            <Route path='home' element={<Welcome />} />
            <Route path='programming' element={<Programming />} />
            <Route path='creative' element={<Creative />} />
            <Route path='about' element={<About />} />
            <Route
              path="*"
              element={
                <main>
                  <p>404 - No existe la ruta!</p>
                </main>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
