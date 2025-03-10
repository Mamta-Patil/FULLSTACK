import React from 'react'
import Testimonials from "../assets/testimonial.jpg"
import thumb from "../assets/thumb.png"
import { IoPersonSharp } from "react-icons/io5";

// import thumb
const TestimonialsPage = () => {
    return (
        <div className='my-20 bg-white '>
            <div className="grid grid-cols-[50%_auto] px-10 py-5 mt-36 ">
                <div>
                    <p className='text-base text-red-400 pt-4 font-semibold'>Testimonials</p>
                    <p className='text-title pt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, sunt id corporis quia animi minus totam reprehenderit incidunt hic repellendus sed temporibus nisi adipisci laudantium ipsa aut esse praesentium. </p>
                    <div className='flex justify-aro bg-white shadow-lg py-10 mx-3'>
                        <div className='h-14 w-14 border rounded-full bg-[pink] ms-7'>
                            <IoPersonSharp className='h-10 w-10 border rounded-full ms-2 mt-2 border-none  text-[#9c757d]' />
                        </div>
                        <div className='ps-7'>
                            <p className='text-title font-bold'> Ronald Richard </p>
                            <p className='text-sm'> Service Taker </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content px-5 relative">
                        <img src={thumb} alt="" className='absolute -right-5 -top-10' />
                    </div>
                    <div className='relative h-[400px] w-[90%] bg-[#eeb6c4]'>
                        <img src={Testimonials} alt="" className='absolute bottom-12' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TestimonialsPage
