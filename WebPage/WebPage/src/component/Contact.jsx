import React from 'react'
import contact from "../assets/contact.png"
const Contact = () => {
    return (
        <div>
            <div className='relative flex justify-around h-[400px] w-[100%] bg-gradient-to-r from-red-500 via-red-500 to-orange-500 mt-20'>
                    <img src={contact} alt="" className='absolute -bottom-3' />
                <div className='ms-96 z-10 mt-40'>
                    <p className='text-subtitle text-white'>Get Professional security service.</p>
                    <button className='bg-black text-white p-2'>Contact With us</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
