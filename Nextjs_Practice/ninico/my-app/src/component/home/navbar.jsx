import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Auscou from "../../../public/Auscou.png"
import Image from 'next/image';
const Navbar = () => {
    return (

        <div className='flex justify-between'>

            <div className='flex  bg-input mx-10 rounded-md item-center' >
                <IoIosSearch className='ms-10 mt-3' />
                <input type="text" placeholder='search' className='p-2 w-96' />
            </div>

            <div className='flex border border-[lightgrey] rounded-md item-center' >
                {/* <IoIosSearch className='ms-2 mt-1' />
                 */}
                <Image
                    src={Auscou}
                    alt="Picture of the author"
                    width={60}
                    height={20}
                />
                <div className='flex px-2 pt-2'>English <MdOutlineKeyboardArrowDown className='mt-1' />
                </div>
            </div>

            <div className='flex border border-[lightgrey] rounded-md item-center ms-6 pt-2' >
                <div className='flex px-2'>USD <MdOutlineKeyboardArrowDown />
                </div>
            </div>

            <div className="flex text-xl ps-2 pt-3">
                <GrCart className='ms-5' />
                <FaRegUser className='ms-5' />
                <FaRegHeart className='ms-5' />
            </div>
        </div>
    )
}

export default Navbar
