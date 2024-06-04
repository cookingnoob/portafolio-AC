import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Photography from './pages/Creative'
import About from './pages/About'
import NavLinks from './components/BarNavLinks'
import { Box } from '@mui/material'
import BarNavLinks from './components/BarNavLinks'

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
            <BarNavLinks />
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
