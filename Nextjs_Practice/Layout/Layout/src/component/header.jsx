import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo.svg"
import Link from 'next/link'
import { navlinks } from '@/data/navbar'
const Header = () => {
  return (
    <div className=''>
      <div className="flex justify-between px-10 txet-light shadow-md fixed top-0 w-[100%] z-10">
        <div>       
            <Image src={logo} alt="Floor plan image" />
        </div>
        <div className='flex justify-between '>
            {navlinks.map((nav,index)=>(
              <div key={index} className='pt-4'>
            <Link href={"/"} className='ps-4 text-xl py-4 font-jostItalic'>{nav.nav}</Link>
                </div>
            ))}
        </div>
        <div>
            <button className='p-2 bg-back mt-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header
