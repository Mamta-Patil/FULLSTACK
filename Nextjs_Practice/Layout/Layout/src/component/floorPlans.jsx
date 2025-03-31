"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { propertyplans } from '@/data/propertyplans'
import img3 from "../../public/img3.jpg"
import img5 from "../../public/img5.png"
import img6 from "../../public/img6.jpg"
import img7 from "../../public/img7.jpg"
import img8 from "../../public/img8.jpg"
import img9 from "../../public/img9.jpg"

const FloorPlans = () => {

  const [selectedTab, setSelectedTab] = useState("basement1");

  const propertyPlans = [
    { name: "Basement 1", amount: "$1000", image: img5, img: img6, id: "basement1" },
    { name: "Basement 2", amount: "$1200", image: img5, img: img7, id: "basement2" },
    { name: "Basement 3", amount: "$1400", image: img5, img: img8, id: "basement3" },
    { name: "Basement 4", amount: "$1600", image: img5, img: img9, id: "basement4" },
    { name: "Basement 5", amount: "$1800", image: img5, img: img3, id: "basement5" },
  ];

  const currentPlan = propertyPlans.find(plan => plan.id === selectedTab);
  return (
    <div>
      <div className='max-w-8xl relative top-0'>
        <div className='m-auto'>
          <div className='text-center'>
            <button className='px-10 py-2 bg-[#F5F6E4] rounded text-center'>FLOOR PLANS</button>
            <p className='text-6xl font-medium m-auto text-center pt-12 '>SPILONS SQUAT PROPERTY  <br /> FLOOR PLANS. </p>
          </div>

          <div className='flex justify-center mt-10'>
            <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-dark'>BSEMENT</button>
            <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-dark ms-4'>BSEMENT</button>
            <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-dark ms-4'>BSEMENT</button>
            <button className='py-3 px-8 bg-[#F5F6E4] border-2 border-dark ms-4'>BSEMENT</button>
            <button className='py-3 px-8 bg-back border-2 border-dark ms-4'>BSEMENT</button>
          </div>

          <div className='flex mt-10 justify-around gap-10 bg-[#F5F6E4] py-10 px-20'>
            <div>
              <Image
                src={img5}
                alt="Picture of the author"
              />
            </div>
            <div className='bg-back p-5'>
              <Image
                src={img3}
                alt="Picture of the author"
              />
              {
                propertyplans.map((el, index) => (
                  <div className='flex justify-between pt-4 text-[20px]' key={index}>
                    <p className=''> {el.name} </p>
                    <p className='text-[30px]'> {el.amount} </p>
                  </div>
                ))
              }
              <button className='px-14 py-5 bg-dark text-light mt-10 ms-8 text-[20px]'>STARTED NOW </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-20">
        <div className="text-center">
          <button className="px-10 py-2 bg-[#F5F6E4] rounded text-center">FLOOR PLANS</button>
          <p className="text-6xl font-medium m-auto text-center pt-12">
            SPILONS SQUAT PROPERTY
            <br /> FLOOR PLANS. 
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mt-10">
          {propertyPlans.map(plan => (
            <button
              key={plan.id}
              className={`py-3 px-8  border-2 border-black ms-4 
            ${selectedTab === plan.id ? "bg-[#e3ef53]" : "bg-[#F5F6E4]"}`}
              onClick={() => setSelectedTab(plan.id)}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Floor Plan Content */}
        {/* <div className="flex sm:flex-col mt-10 justify-around gap-10 bg-[#F5F6E4] py-10 px-20"> */}
        <div className="grid grid-cols-2 md:grid-col-2 @sm:grid-col-1 mt-10 justify-around gap-10 bg-[#F5F6E4] py-10 px-20">
          <div>
            <Image src={currentPlan.image} alt="Floor plan image" />
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
export default FloorPlans
