import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { teamdata } from '../data/team'
const Team = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 mx-10 mt-10'>
                {teamdata.map((teamdata,index) => (
                    <div className='flex justify-aro bg-white shadow-lg py-10 mx-3' key={index}>
                        <div className='h-20 w-20 border rounded-full bg-[pink] ms-7'>
                            <IoPersonSharp className='h-14 w-14 border rounded-full ms-3 mt-3 border-none  text-[#9c757d]' />
                        </div>
                        <div className='ps-7'>
                            <p className='text-subtitle font-bold'> {teamdata.title} </p>
                            <p className='text-title'> {teamdata.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
