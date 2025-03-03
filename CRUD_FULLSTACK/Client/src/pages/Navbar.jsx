import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-slate-500'>
      <div className='mx-5 flex justify-between'>
      <button className='border border-white mt-5 mb-5 p-2 font-serif text-white '> 
        <Link to="/studentData">
          Student Info
        </Link>
      </button>
      <button className='border border-white mt-5 mb-5 p-2 font-serif text-white'> 
        <Link to={"/create"}> Create Student Info </Link>
         </button>
      </div>
     
    </div>
  )
}

export default Navbar
