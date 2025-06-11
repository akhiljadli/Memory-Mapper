import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Visualise from './Components/Visualise'
import Navbar2 from './Components/Navbar2'
import Learn2 from './Components/Learn2'
import Footer2 from './Components/Footer2'

function App() {
  return (
    <div className='h-screen w-screen font-mont text-black font-vendana'>
      <Navbar2 />
      <Routes >
        <Route path='/Memory-Mapper' element={<Learn2 />} />
        <Route path='/visualise' element={<Visualise />} />
      </Routes>
      <Footer2 />
    </div>
  )
}

export default App
