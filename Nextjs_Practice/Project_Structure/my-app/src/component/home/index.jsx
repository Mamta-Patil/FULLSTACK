import React from 'react'
import Home1 from './home1'
import Home2 from './home2'

const Home = () => {
  return (
    <div className='max-h-screen bg-amber-900'>
      <p> This is Home page</p>
      <Home1 />
      <Home2 />
    </div>
  )
}

export default Home
