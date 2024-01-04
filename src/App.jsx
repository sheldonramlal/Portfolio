import { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Skills from './Components/Skills'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />

        <Routes>
          <Route
           path="/skills"
           element={<Skills />}
          />
          <Route
           path="/projects"
           element={<Projects />}
          />
          <Route
           path="/resume"
           element={<Resume />}
          />
          <Route
           path="/"
           element={<Home />}
          />
          
        </Routes>
      
    
    </BrowserRouter>
    </>
  )
}

export default App
