"use client"
import { paymnet } from '@/data/payment'
import React, { useState } from 'react'
import Image from 'next/image'
import bg from "../../public/bg.png"

const Layout = () => {

  return (

      <div className='relative mt-20'>
        <Image
          src={bg}
          width={100}
          height={"auto"}
          alt="Picture of the author" className='object-fill absolute top-0 h-[auto] w-[100%] overflow-hidden'
        />

        <div className='flex justify-between bg-back py-20 px-24  mx-auto my-16'>
          <div>
            <button className='text-[15px] py-3 px-10 bg-green mt-5 mb-12'>ESTIMATE</button>
            <h2 className='text-5xl'>YOUR <br /> PAYMENT <br />  ESTIMATE</h2>
          </div>

          <div>
            <p className='text-[15px]'>PURCHASE PRICE%:</p>
            <input type="number" placeholder='6382' className='p-5 mt-4 border-1 border-dark w-[120%]' />
            <p className='text-[15px] mt-10'>LOAN TERM YEAR:</p>
            <input type="number" placeholder='35' className='p-5 mt-4 border-1 border-dark w-[120%]' /> <br />
            <button className='w-[200px] py-5 bg-dark text-light mt-10 mb-0 text-[20px]'>Estimate Payment </button>
          </div>

          <div>
            <p className='text-[15px]'>PURCHASE PRICE%:</p>
            <input type="number" placeholder='6382' className='p-5 mt-4 border-1 border-dark w-[120%]' />
            <p className='text-[15px] mt-10'>LOAN TERM YEAR:</p>
            <input type="number" placeholder='35' className='p-5 mt-4 border-1 border-dark w-[120%]' /> <br />
          </div>

          <div className='bg-light border-1 border-dark px-10'>
            {paymnet.map((el,index) => (
              <div className='text-center mt-10' key={index}>
                <p className='text-[15px]'>{el.name}:</p>
                <p className='text-2xl pt-2'>{el.amount} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  )
}

export default Layout
