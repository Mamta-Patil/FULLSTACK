"use client"
import React from 'react'
import Category from './category'
import Navbar from './navbar'
import Header from './header'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import banner1 from "../../../public/banner1.jpg"
import banner2 from "../../../public/banner2.jpg"
import banner3 from "../../../public/banner3.jpg"
import banner4 from "../../../public/banner4.jpg"
import banner5 from "../../../public/banner5.jpg"

import Image from 'next/image'
import { category } from '@/data/category'

export const offer = { title: "Welcome to our international shop! Enjoy free shipping on orders $100 up. " }
export const slider = [
    {
        img: banner1,
    },
    {
        img: banner2,
    },
    {
        img: banner3,
    },
]


const Layout = () => {
    return (
        <div>
            <div className='flex ps-[8%] py-3 bg-offer text-bold'> {offer.title}  <span className='text-red-500'>Shop Now </span> <IoIosArrowRoundForward className='ms-2' />
            </div>
            <div className='flex flex-col lg:flex-row lg:mx-28 lg:my-5 m-auto'>
                <div className='w-[20%]'>
                    <Category />
                </div>
                <div className='w-[80%]'>
                    <Navbar />
                    <Header />
                    <div className="flex gap-6 mt-6">
                        <Swiper
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {slider.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={item.img} alt="Floor plan image" className='relative' />
                                    <div className='absolute top-20 left-10'>
                                        <h2 className='text-2xl'>Accessories</h2>
                                        <h2 className='text-2xl'>Up To</h2>
                                        <h2 className='text-2xl text-info'>40% Off</h2>
                                        <h2 className='text-2xl'>latest Creations</h2>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        <div className='flex flex-col'>
{/*                             
                        {category.map((item, index) => (
                             <div className='relative'>
                             <Image src={item.banner4} alt="Floor plan image" className='rounded-md' height={1800} width={800} />
                             <div className='absolute top-4 p-4'>
                                 <span className='text-info'>{item.title}</span> <br />
                                 <span className='text-xl'>{item.description} </span>
                             </div>
                         </div>
                            ))} */}

                            <div className='relative'>
                                <Image src={banner4} alt="Floor plan image" className='rounded-md' height={1800} width={800} />
                                <div className='absolute top-4 p-4'>
                                    <span className='text-info'>Hand made</span> <br />
                                    <span className='text-xl'>New Modern  Stylist <br /> Craft </span>
                                </div>
                            </div>

                            <div className='relative mt-10'>
                                <Image src={banner5} alt="Floor plan image" className='rounded-md' height={1800} width={800} />
                                <div className='absolute top-4 p-4'>
                                    <span className='text-info'>Popular</span> <br />
                                    <span className='text-xl'>Energy with our  <br />  newest collection </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Layout
