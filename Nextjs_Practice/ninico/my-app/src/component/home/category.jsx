import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { PiBeerBottleDuotone } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";
import { BiCrown } from "react-icons/bi";
import { GrGift } from "react-icons/gr";

export const category = [
  {
    id: 1,
    icon: <FaRegUser />,
    title: "Candles"
  },
  {
    id: 2,
    icon: <GiFlowerPot />,
    title: "Handmade"
  },
  {
    id: 3,
    icon: <PiBeerBottleDuotone />,
    title: "Gift Sets"
  },
  {
    id: 4,
    icon: <FaRegSmile />
    ,
    title: "Plastic Bags"
  },
  {
    id: 5,
    icon: <RiFootballLine />
    ,
    title: "Handy Cream"
  },
  {
    id: 6,
    icon: <BiCrown />,
    title: "Cosmetics"
  },
  {
    id: 7,
    icon: <GrGift />,
    title: "Slik Accessries"
  },
]
const Category = () => {
  return (
    <div className=''>
      <Image
        src={logo}
        alt="Picture of the author"
      />
      <div className='border rounded-lg mt-3 border-[lightgrey]'>
        <div className='py-3 bg-btn border-b rounded-t-lg  flex  text-white'>
          <FiMenu className='mt-1 me-2 ms-6' />
          <Link href="ms-2">Category</Link>
        </div>
        <div className="div ">
          {category.map((item, index) => (
            <div className='pe-2'>
              <Link href="" className='flex py-3 text-sm'> <div className='ms-6 me-3 text-info mt-1'> {item.icon} </div> <div> {item.title} </div> </Link>
            </div>
          ))}
        </div>
        <ul className='py-5 bg-[lightgrey] ps-8 pe-4 leading-8'>
          <li> <Link href={""}> Value of the Day</Link> </li>
          <li> <Link href={""}> Top 100 offers</Link> </li>
          <div>New Arrivals</div>
        </ul>
      </div>
    </div>
  )
}

export default Category
