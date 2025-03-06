import React from 'react'
import Navbar from './Navbar'
// import Image from "../assets/bg.webp"
const Payment = () => {
    return (
        <div>
            <Navbar />
            <div className='relative min-h-screen bg-slate-50 text-black dark:bg-slate-900 dark:text-white'>
                <div className='absolute  shadow-md top-36 mx-96 mt-10 px-9 '>
                    <p className='ps-2 font-semibold text-center'>Payment Successfull</p>
                    <p className='px-6 py-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi asperiores tempora id minima? Nihil omnis ut saepe molestiae aut exercitationem quia, facere ipsa quo blanditiis maiores numquam, dignissimos consectetur voluptas!</p>
                    <button className='p-2 shadow-md my-4'>Go Back to Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default Payment
