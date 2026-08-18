import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Notestate from './context/notes/Notestate'
import Alert from './Components/Alert'
import Signup from './Components/Signup'
import Login from './Components/Login'

  
function App() {
 

  return (
    <>
    <Notestate>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        < Route path="/login" element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
      </Routes>
    </Notestate>
    </>
  )
}

export default App
