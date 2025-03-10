import React from 'react'
import Accordian from './Accordian'
import faq from "../assets/faq.jpg"
const Faq = () => {
    return (
        <div>
            <div className='my-40 bg-blue-gray-200 '>
                <div className="grid grid-cols-[50%_auto] py-5 mt-36">
                    <div className="image relative  w-[500px]">
                       <img src={faq} alt="" className='absolute pe-10 bottom-0 bg-[pink] mt-5' />
                    </div>
                    <div className="content px-5">
                        <p className='text-base text-red-400 pt-4 font-semibold'>Faq’s</p>
                        <p className='text-subtitle'>Frequently Asked Questions</p>
                        <Accordian />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
