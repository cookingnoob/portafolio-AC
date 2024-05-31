import { Outlet } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Photography from './pages/Photography'
import Welcome from './pages/Welcome'
import Work from './pages/Work'

function App() {


  return (
    <>
      <Outlet />
    </>
  )
}

export default App
