import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full px-10  border-b-1 border-[lightgrey] pb-4">
 <div className='flex justify-between pt-4 bg-white'>
      <div className=''>
        <h2 className='font-serif text-3xl'>Dashboard</h2>
         <p> Tech Samrajya Admin Dashboard </p>
        </div>
      <div className='flex pt-4'> 
        <p>Login User </p>
        <MdArrowDropDown />
      </div>
    </div>
    </div>
   
  )
}

export default Navbar
