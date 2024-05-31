import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Photography from './pages/Photography'
import About from './pages/About'

function App() {


  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/home' index element={<Welcome />} />
          <Route path='creative' element={<Photography />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
