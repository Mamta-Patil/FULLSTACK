import React from 'react'
import { Dedicated } from '../data/dedicated'
const DedicatedInve = () => {
    return (
            <div>
                <p className='text-red-400 pt-4 font-semibold text-center'> Investigator                </p>
                <p className='text-subtitle text-center font-bold'>Our Dedicated Investigators</p>
                <div className="">
                    <div className='grid grid-cols-3 gap-4 px-5 py-5'>
                        {Dedicated.map((inve, index) => (
                            <div key={index}  className='relative'>
                                      <img src={inve.img} alt="" className='object-fill w-[100%]' />   
                                      <div className='bg-white shadow-md absolute w-[80%] -bottom-10 py-3 ms-10 max-4 text-center'>
                                        <p className='text-2xl'> {inve.title} </p> 
                                        <p className='text-red-400 pt-4 font-semibold text-center'> {inve.description} </p>  
                                     </div>                 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default DedicatedInve
