import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Photography from './pages/Photography'
import About from './pages/About'
import NavLinks from './components/NavLinks'
import { Box } from '@mui/material'

function App() {


  return (
    <>
      <Box bgcolor={'primary.dark'}
        height={'100vh'}>
        <nav>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-end'}
          >
            <NavLinks />
          </Box>
        </nav>

        <main>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            marginBottom={'50px'}
          >
            <Outlet />
          </Box>
        </main>
        <footer>
          <Box></Box>
        </footer>

      </Box>
    </>
  )
}

export default App
