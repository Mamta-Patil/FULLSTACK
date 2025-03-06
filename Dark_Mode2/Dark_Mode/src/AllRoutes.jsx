import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Blog from './component/Blog'
import Payment from './component/Payment'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar /> }  />
        <Route path='/home' element={<Home /> }  />
        <Route path='/blog' element={<Blog /> }  />
        <Route path='/Payment' element={<Payment  /> }  />
      </Routes>
    </div>
  )
}

export default AllRoutes
