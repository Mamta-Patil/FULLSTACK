import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from './component/HOme'
import Navbar from './component/Navbar'

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Navbar />} />
     </Routes>
    </div>
  )
}

export default AllRoutes
