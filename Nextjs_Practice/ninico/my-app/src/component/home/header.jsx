import { header } from '@/data/header'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Header = () => {
  return (
    <div className='mt-2 flex justify-between'>
      <div className='flex ps-3'>
        {header.map((nav, index) => (
          <div key={index} className='pt-4'>
            <Link href={"/"} className='flex ps-10 text-bold'>{nav.nav}  <MdOutlineKeyboardArrowDown className='ms-1 mt-1' /> </Link>
          </div>
        ))}
      </div>
      <div className="flex pt-4">
        <div className="flex">
          <MdOutlinePhoneEnabled className='mt-1 text-info' />
          {/* <SlLocationPin /> */}
          <span className='ps-2'>908. 408. 501. 89</span>
        </div>
        <div className="flex ps-6">
          <SlLocationPin className='mt-1 text-info' />
          <span className='ps-2'>Find Store</span>
        </div>
      </div>
    </div>
  )
}

export default Header
