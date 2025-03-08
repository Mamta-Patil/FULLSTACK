import React from 'react'
import { servicesdata } from '../data/servicesdata'
const Services = () => {
    return (
        <div>
            <div className='bg-blue-gray-200 py-10'>
                <p className='text-red-400 pt-4 font-semibold text-center'> Our Services</p>
                <p className='text-subtitle text-center font-bold'>Private Investigation <br /> Services</p>
                <div className="">
                    <div className='grid grid-cols-3 gap-4 px-5 py-5'>
                        {servicesdata.map((services, index) => (
                            <div key={index}>
                                <div className='relative'>
                                    <div className='relative'>
                                    <img src={services.img} alt="" className='object-fill w-[100%]' />                                        
                                    </div>
                                <button className='m-auto absolute left-36 top-48 ps-4 pe-4 py-2 bg-white  text-black'>Read More</button>

                                <div className='bg-white py-10 px-10'>
                                    <p className='text-3xl text-center'>{services.title} </p>
                                    <p className='text-info text-description text-center'>{services.description} </p>
                                </div>
                                <button className='m-auto absolute ps-4 pe-4 py-2 bg-blue-gray-900 -bottom-5 left-36 text-white'>Read More</button>
                                
                                </div>
                                {/* <Button></Button> */}
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
