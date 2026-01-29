import { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

import ProjectDetail from './Components/ProjectPage'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />

        <Routes>
          
          
          <Route
           path="/"
           element={<Home />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />
        </Routes>
      
    
    </BrowserRouter>
    </>
  )
}

export default App
