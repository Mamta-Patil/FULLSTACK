import { paymnet } from '@/data/payment'
import React from 'react'
import Image from 'next/image'
import bg from  "../../public/bg.png"
const Layout = () => {
  return (
    <div className='max-w-8xl flex justify-around bg-[#e3ef53] py-20 px-10 relative mx-auto my-16'>
        {/* <img src="https://wpocean.com/html/tf/suqat-live/assets/images/noice.png" alt="" className='absolute top-0 object-fill w-[100%] overflow-hidden' /> */}
        <Image
      src={bg}
      width={500}
      height={500}
      alt="Picture of the author" className='absolute top-0 object-fill w-[100%] overflow-hidden'
    />
      <div>
       <h2 className='font-semibold text-7xl'>YOUR <br /> PAYMENT <br /> ESTIMATE</h2>
      <button className='tex-3xl p-2 bg-[#c7d249] mt-5 '>ESTIMATE</button>
      </div>
      <div>
         <p className='text-xl'>PURCHASE PRICE%:</p>
         <input type="number" placeholder='6382' className='p-5 mt-4 border-1 border-black' />
         <p className='text-xl mt-5'>LOAN TERM YEAR:</p>
         <input type="nu mber" placeholder='35' className='p-5 mt-4 border-1 border-black' /> <br />
         <button  className='px-14 py-5 bg-black text-[#fff] mt-10 mb-0'>Estimate Payment </button>
      </div>
      <div>
         <p className='text-xl'>PURCHASE PRICE%:</p>
         <input type="number" placeholder='6382' className='p-5 mt-4 border-1 border-black' />
         <p className='text-xl mt-5'>LOAN TERM YEAR:</p>
         <input type="nu mber" placeholder='35' className='p-5 mt-4 border-1 border-black' /> <br />
      </div>
      
      <div className='bg-white border-1 border-black px-10'>
        {paymnet.map((el)=>(
            <div className='text-center mt-10'>
            <p>{el.name}:</p>
            <p className='text-2xl'>{el.amount} </p>
           </div>
        ))}
        
      </div>
    </div>
  )
}

export default Layout
