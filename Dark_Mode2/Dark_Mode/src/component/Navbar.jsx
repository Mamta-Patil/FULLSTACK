import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { themeContext } from '../context/Themecontext'

const Navbar = () => {
  const {darkMode,setDarkMode}=useContext(themeContext)
  return (
    <div className='flex justify-between bg-slate-50 text-black dark:bg-slate-900 dark:text-white text-xl px-5 py-2'>
      <NavLink to={"/home"}>Home</NavLink> 
      <NavLink to={"/blog"}>Blog</NavLink>
      <NavLink to={"/payment"}>Payment</NavLink>
            
      <button 
      onClick={() => setDarkMode(!darkMode)} 
      className="p-2 bg-gray-400 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
    </div>
  )
}

export default Navbar
