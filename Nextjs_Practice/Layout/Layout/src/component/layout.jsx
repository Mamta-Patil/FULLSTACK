"use client"
import { paymnet } from '@/data/payment'
import React, { useState } from 'react'
import Image from 'next/image'
import bg from "../../public/bg.png"
import abbg from "../../public/abbg.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"

import img5 from "../../public/img5.png"

import { propertyplans } from '@/data/propertyplans'

const Layout = () => {

  const [selectedTab, setSelectedTab] = useState("basement1");

  const propertyPlans = [
    { name: "Basement 1", amount: "$1000", img: "/basement1.jpg", id: "basement1" },
    { name: "Basement 2", amount: "$1200", img: "/basement2.jpg", id: "basement2" },
    { name: "Basement 3", amount: "$1400", img: "/basement3.jpg", id: "basement3" },
    { name: "Basement 4", amount: "$1600", img: "/basement4.jpg", id: "basement4" },
    { name: "Basement 5", amount: "$1800", img: "/basement5.jpg", id: "basement5" },
  ];

  const currentPlan = propertyPlans.find(plan => plan.id === selectedTab);

  return (
    <div className='max-w-8xl '>
      <div className='m-auto mx-34 mt-20'>

        <div className='text-center'>
          <button className='px-10 py-2 bg-[#F5F6E4] rounded text-center'>ABOUT US</button>
          <p className='text-6xl font-medium m-auto text-center pt-12 '>Create Your Story in a Place <br /> Where Dreams and Reality <br /> Merge. </p>
        </div>

        <div className="flex justify-around mt-10 gap-12">

          <div className='relative'>
            <div className="absolute h-28 w-28 bg-gray-500 -top-8 -left-10 -z-50"></div>
            <div className='bg-black p-10 text-left z-10'>
              <h4 className='text-white text-3xl text-underline pb-4 underline  underline-offset-1'>our mission:</h4>
              <span className='text-[#CBEB44] leading-8 underline  underline-offset-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span>
              <p className='text-white pt-4 leading-8'> do  eiusmod tempor  incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus  mattis molestie a iaculis.</p>
            </div>
          </div>

          <div className='text-center'>
            <button className='py-4 px-10 bg-[#CBEB44] font-semibold'>Contact our agent</button>
            <Image
              src={abbg}
              width={1000}
              height={700}
              alt="Picture of the author" className='mt-28'
            />
          </div>

          <div className='shadow-md relative'>
            <div>
              <Image
                src={img2}
                // width={700}
                // height={}
                alt="Picture of the author" className='mt-32 absolute -top-52 -right-20 -z-50'
              />
            </div>
            <div className='bg-[#FFFFFF]  p-10'>
              <h4 className='text-black text-3xl text-underline underline underline-offset-1'>our vision:
                :</h4>
              <span className='leading-8 underline underline-offset-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. </span>
              <p className='text-black leading-8 underline underline-offset-1'>Est ante in nibh mauris
                cursus
                mattis molestie a iaculis.</p>
            </div>
          </div>
        </div>
      </div>



      <div className='relative'>
        {/* <img src="https://wpocean.com/html/tf/suqat-live/assets/images/noice.png" alt="" className='absolute top-0 object-fill w-[100%] overflow-hidden' /> */}
        <Image
          src={bg}
          width={100}
          height={"auto"}
          alt="Picture of the author" className='object-fill absolute top-0 h-[auto] w-[100%] overflow-hidden'
        />

        <div className='flex justify-around bg-[#e3ef53] py-20 px-24  mx-auto my-16'>
          <div>
            <button className='text-[15px] py-3 px-10 bg-[#c7d249] mt-5 mb-12'>ESTIMATE</button>
            <h2 className='text-5xl'>YOUR <br /> PAYMENT <br />  ESTIMATE</h2>
          </div>

          <div>
            <p className='text-[15px]'>PURCHASE PRICE%:</p>
            <input type="number" placeholder='6382' className='p-5 mt-4 border-1 border-black w-[110%]' />
            <p className='text-[15px] mt-10'>LOAN TERM YEAR:</p>
            <input type="number" placeholder='35' className='p-5 mt-4 border-1 border-black w-[110%]' /> <br />
            <button className='px-14 py-5 bg-black text-[#fff] mt-10 mb-0 text-[20px]'>Estimate Payment </button>
          </div>

          <div>
            <p className='text-[15px]'>PURCHASE PRICE%:</p>
            <input type="number" placeholder='6382' className='p-5 mt-4 border-1 border-black w-[110%]' />
            <p className='text-[15px] mt-10'>LOAN TERM YEAR:</p>
            <input type="number" placeholder='35' className='p-5 mt-4 border-1 border-black w-[110%]' /> <br />
          </div>

          <div className='bg-white border-1 border-black px-10'>
            {paymnet.map((el) => (
              <div className='text-center mt-10'>
                <p className='text-[15px]'>{el.name}:</p>
                <p className='text-2xl pt-2'>{el.amount} </p>
              </div>
            ))}
          </div>

        </div>

      </div>


      <div className='m-auto mt-20'>
        <div className='text-center'>
          <button className='px-10 py-2 bg-[#F5F6E4] rounded text-center'>FLOOR PLANS</button>
          <p className='text-6xl font-medium m-auto text-center pt-12 '>SPILONS SQUAT <div className='relative'>
            <div>PROPERTY</div> <span className='absolute top-0 w-10 bg-[#e3ef53]'></span>
            </div>  <br /> FLOOR PLANS. </p>
        </div>

        <div className='flex justify-center mt-10'>
          <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-black'>BSEMENT</button>
          <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-black ms-4'>BSEMENT</button>
          <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-black ms-4'>BSEMENT</button>
          <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-black ms-4'>BSEMENT</button>
          <button className='py-3 px-8 bg-[#e3ef53] border-2 border-black ms-4'>BSEMENT</button>
        </div>

        <div className='flex mt-10 justify-around gap-10 bg-[#F5F6E4] py-10 px-20'>
          <div>
            <Image
              src={img5}
              alt="Picture of the author"
            />
          </div>
          <div className='bg-[#CBEB44] p-5'>
            <Image
              src={img3}
              alt="Picture of the author"
            />
            {
              propertyplans.map((el) => (
                <div className='flex justify-between pt-4 text-[20px]'>
                  <p className=''> {el.name} </p>
                  <p className='text-[30px]'> {el.amount} </p>
                </div>
              ))
            }
            <button className='px-14 py-5 bg-black text-[#fff] mt-10 ms-10 text-[20px]'>STARTED NOW </button>
          </div>
        </div>
      </div>



      <div className="m-auto mt-20">
      <div className="text-center">
        <button className="px-10 py-2 bg-[#F5F6E4] rounded text-center">FLOOR PLANS</button>
        <p className="text-6xl font-medium m-auto text-center pt-12">
          SPILONS SQUAT 
          <div className="relative">
            <div>PROPERTY</div> 
            <span className="absolute top-0 w-10 bg-[#e3ef53]"></span>
          </div>  
          <br /> FLOOR PLANS.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mt-10">
        {propertyPlans.map(plan => (
          <button
            key={plan.id}
            className={`py-3 px-8 border-2 border-black ms-4 
            ${selectedTab === plan.id ? "bg-[#e3ef53]" : "bg-[#F5F6E4]"}`}
            onClick={() => setSelectedTab(plan.id)}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Floor Plan Content */}
      <div className="flex mt-10 justify-around gap-10 bg-[#F5F6E4] py-10 px-20">
        <div>
          <Image src={currentPlan.img} alt="Floor plan image" width={300} height={300} />
        </div>
        <div className="bg-[#CBEB44] p-5">
          <Image src={currentPlan.img} alt="Selected floor plan" width={300} height={300} />
          <div className="flex justify-between pt-4 text-[20px]">
            <p>{currentPlan.name}</p>
            <p className="text-[30px]">{currentPlan.amount}</p>
          </div>
          <button className="px-14 py-5 bg-black text-[#fff] mt-10 ms-10 text-[20px]">START NOW</button>
        </div>
      </div>
    </div>
  



    </div>
  )
}

export default Layout
