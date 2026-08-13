import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Notestate from './context/notes/Notestate'

  
function App() {
 

  return (
    <>
    <Notestate>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Notestate>
    </>
  )
}

export default App
