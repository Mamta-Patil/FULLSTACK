import Image from 'next/image'
import React from 'react'
import abbg from "../../public/abbg.jpg"
import img2 from "../../public/img2.jpg"
// import { Roboto } from 'next/font/google'
 
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })
const Aboutus = () => {
  return (
    <div>
      <div className='max-w-8xl relative'>
        <div className='m-auto mx-34 mt-40 @container'>
          <div className='text-center'>
            <button className='px-10 py-2 bg-theme font-roman rounded text-center'>ABOUT US</button>
             <p className='text-6xl font-ibaraBold m-auto text-center pt-12'>Create Your Story in a Place <br /> Where Dreams and Reality <br /> Merge. </p>
             {/* <p className={`text-6xl font-medium m-auto text-center pt-12 ${roboto.className}`}>
             Create Your Story in a Place <br /> Where Dreams and Reality <br /> Merge. </p> */}
          </div>
          {/* <div className="grid grid-cols-1 @lg:grid-col-2 justify-around mt-10 gap-12"> */}
          <div className="flex flex-col @lg:flex-row justify-around mt-10 gap-12">
            <div className='relative'>
              <div className="absolute h-28 w-28 bg-gray-500 -top-8 -left-10 -z-50"></div>
              <div className='bg-dark p-10 text-left z-10'>
                <h4 className='text-light text-3xl text-underline pb-4 underline  underline-offset-1'>our mission:</h4>
                <span className='text-back leading-8 underline  underline-offset-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span>
                <p className='text-light pt-4 leading-8'> do  eiusmod tempor  incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus  mattis molestie a iaculis.</p>
              </div>
            </div>

            <div className='text-center'>
              <button className='py-4 px-10 bg-back font-semibold'>Contact our agent</button>
              <Image
                src={abbg}
                width={1000}
                height={700}
                alt="Picture of the author" className='mt-40'
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
                <h4 className='text-dark text-3xl text-underline underline underline-offset-1'>our vision:
                  :</h4>
                <span className='leading-8 underline underline-offset-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. </span>
                <p className='text-dark leading-8 underline underline-offset-1'>Est ante in nibh mauris
                  cursus
                  mattis molestie a iaculis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
