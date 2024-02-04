import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sing-in' element={<SingIn />} />
        <Route path='/sing-up' element={<SingUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App