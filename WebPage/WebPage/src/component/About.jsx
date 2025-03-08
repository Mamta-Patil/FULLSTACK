import React from 'react'
import thumb from "../assets/thumb.png"
import subimg from "../assets/subimg.jpg"
import abBg from "../assets/abBg.png"
import { FaCheckCircle } from "react-icons/fa";
import Button from "../CVA/Button"

import { aboutdata } from "../data/aboutdata"
const About = () => {
    return (
        <div className='my-40 bg-white '>
            <div className="grid grid-cols-[50%_auto] px-10 py-5 mt-36">
                <div className="image relative">
                    <img src={thumb} alt="" className='mt-5 absolute -top-20 -right-1 z-10' />
                    <div className=''>
                        <img src="https://insighteye-react.vercel.app/static/media/about-1.892e0f239d59cc972f5e.jpg" alt="" className='z-20 relative ps-20' />
                        <div className='bg-white'>
                            <img src={subimg} alt="" className='absolute -bottom-20 z-40 p-3' />
                        </div>
                    </div>
                </div>
                <div className="content px-5">
                    <p className='text-base text-red-400 pt-4 font-semibold'>{aboutdata.title} </p>
                    <p className='text-subtitle'>{aboutdata.subtit} </p>
                    <p className='text-description text-info'>{aboutdata.des}</p>
                    <div className='mt-7 relative bg-blue-gray-100'>
                        <img src={abBg} alt="" className='' />
                        <div className="absolute top-10 w-[100%] ">
                            <div className='flex justify-between px-10 font-bold'>
                                <div>                            
                                    <p className='flex'> <FaCheckCircle className='text-red-500 me-2' />   Background Check</p>
                                    <p className='flex'> <FaCheckCircle className='text-red-500 me-2' />   Background Check</p>
                                    <p className='flex'> <FaCheckCircle className='text-red-500 me-2' />   Background Check</p>
                                </div>
                                <div>
                                    <p className='flex'> <FaCheckCircle className='text-red-500 me-2' />   Background Check</p>
                                    <p className='flex'> <FaCheckCircle className='text-red-500 me-2' />   Background Check</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="primary" size="lg" className={"mt-24"}>Discover More</Button>
                </div>
            </div>
        </div>
    )
}

export default About
