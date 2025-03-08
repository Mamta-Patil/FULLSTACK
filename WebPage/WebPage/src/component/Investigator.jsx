import React from 'react'
import thumb from "../assets/thumb.png"
import { Investigatordata } from '../data/Investigator'
import Button from "../CVA/Button"
import img1 from  "../assets/img1.svg"
import img2 from  "../assets/img2.svg"
import img3 from  "../assets/img3.svg"
import inve from "../assets/inve.png"
const Investigator = () => {
  return (
    <div>
      <div className="grid grid-cols-[50%_auto] px-10 py-16">
        <div className="contnet">
            <img src={thumb} alt="" className='ms-20' />
            <div>
                <p className='text-base text-red-400 pt-4 font-semibold'> {Investigatordata.title} </p>
                <p className='text-subtitle pt-7'> {Investigatordata.subtitle} </p>
                <p className='text-description text-info pt-7'> {Investigatordata.description} </p>
                <Button variant="primary" size="lg" className={"mt-10"}>Discover More</Button>
            </div>
        </div>
        <div className="images grid grid-cols-2 gap-10 h-1/2 mx-20 text-center">
            <div className=' bg-white shadow-lg py-16 hover:-top-5'>
                <img src={img1} alt="" className='p-3 bg-[pink] rounded-full m-auto' />
                <p className='text-inve'> Expert <br /> Investigator <br /> Agents</p>
            </div>
            <div className=' bg-white shadow-lg py-16 relative top-28'>
                <img src={img2} alt="" className='p-3 bg-[pink] rounded-full m-auto' />
                <p className='text-inve'> Expert <br /> Investigator <br /> Agents</p>
            </div>
            <div className=' bg-white shadow-lg  py-16 z-20'>
                <img src={img3} alt="" className='p-3 bg-[pink] rounded-full m-auto' />
                <p className='text-inve'> Expert <br /> Investigator <br /> Agents</p>
            </div>
            <img src={inve} alt=""  className='relative top-40 -left-60 z-10' />

        </div>
      </div>

    </div>
  )
}

export default Investigator
