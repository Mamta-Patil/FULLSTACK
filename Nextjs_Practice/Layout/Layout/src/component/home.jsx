"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import homebg from "../../public/homebg.png"
import logo from "../../public/logo.svg"
import img1 from "../../public/img1.jpg";
import img4 from "../../public/img4.jpg"
import Link from 'next/link'
import { navlinks } from '@/data/navbar'
import { sidemenu } from '@/data/home'
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import himg1 from "../../public/himg1.jpg";
import himg2 from "../../public/himg2.jpg";
// import dynamic from 'next/dynamic';



// ✅ Import Swiper dynamically for Next.js
// const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });

const properties = [
  {
    id: 1,
    img: himg1,
    location: "Tucson, Arizona (AZ), 85719",
    title: "WHERE NATURE MEETS REFINEMENT.",
    price: "$668,237",
    image: img1,
  },
  {
    id: 2,
    img: img4,
    location: "Los Angeles, CA, 90001",
    title: "MODERN LIVING AT ITS FINEST.",
    price: "$850,000",
    image: himg2,
  },
  {
    id: 3,
    img: himg1,
    location: "Tucson, Arizona (AZ), 85719",
    title: "WHERE NATURE MEETS REFINEMENT.",
    price: "$668,237",
    image: img1,
  },
];
const Home = () => {
  return (
    <div className='relative'>
      <Image src={homebg} alt="Floor plan image" className='absolute top-0 oject-cover z-10' />
      <div className='flex h-screen'>
        <div className="side absolute top-0 w-[18%] z-10">
          {sidemenu.map((item, index) => (
            <div key={index} className='bg-[lightgrey]'>
              <div className='py-4' >
                <p className='text-[40px] text-center font-semibold'>{item.number}</p>
                <p className='text-[18px] text-center'>{item.title}</p>
              </div>
            </div>
          ))}
          <div className='pt-10 pb-6 text-center txet-light shadow-md'>
            <p>WATCH INTRO VIDEO</p>
            <p className='h-16 w-16 bg-dark mx-24 my-2 rounded-full pt-6' ><FaPlay className='mx-6 h-6 w-6z text-back' /> </p>
          </div>
        </div>

        <div className='w-[82%] ms-[18%]'>
          <div className="flex justify-between px-10 txet-light shadow-md top-0 ">
            <div>
              <Image src={logo} alt="Floor plan image" />
            </div>
            <div className='flex justify-between '>
              {navlinks.map((nav, index) => (
                <div key={index} className='pt-4'>
                  <Link href={"/"} className='ps-4 text-xl py-4'>{nav.nav}</Link>
                </div>
              ))}
            </div>
            <div>
              <button className='p-2 bg-back mt-3'>Get Started</button>
            </div>
          </div>

          <div className="bg-gray-100 flex items-center justify-center py-10">
            <Swiper
              modules={[Pagination, EffectFade]}
              pagination={{ clickable: true }}
              effect="fade"
              className="w-full max-w-7xl"
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id}>
                  <div className="flex flex-col md:flex-row items-center justify-between txet-light shadow-lg rounded-lg p-6 mt-10">
                    <div className="flex text-center md:text-left">
                      <div>
                        <p className="text-sm text-gray-500 flex items-center">
                          📍 {property.location}
                        </p>
                        <h1 className="text-3xl font-bold mt-2">{property.title}</h1>
                        <p className="text-lg font-semibold mt-4 bg-back px-4 py-2 rounded-md inline-block">
                          Initial Price: {property.price}
                        </p>
                      </div>
                      <div>
                        <Image src={property.img} alt="Floor plan image" className='oject-cover' />
                      </div>
                    </div>

                    <div className="">
                      <Image src={property.image} alt="Floor plan image" className='' />
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="custom-pagination absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10"></div> */}
            {/*  */}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
