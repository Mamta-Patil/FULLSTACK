import React from 'react'
import About1 from './about1'
import About2 from './about2'

const About = () => {
  return (
    <div className='max-h-screen bg-blue-900'>
      <h2>This is About Page</h2>
      <About1 />
      <About2 />

    <p className='text-[pink]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium architecto eligendi iusto, distinctio nesciunt, modi tempore tempora doloremque sint cum, veritatis culpa quaerat deleniti ad vel! Minus sapiente quia placeat. </p>

    </div>
  )
}

export default About
