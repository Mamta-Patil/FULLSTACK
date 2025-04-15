import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div>
            <div className='flex'>
                <div className="w-[20%]">
                    <Sidebar />
                </div>
                <div className="w-[80%]">
                    <Navbar />
                    <div className="flex justify-around mt-14">
                            <div className="p-28 bg-white rounded-md text-black shadow-lg">
                                <h2 className='text-2xl font-serif'>Product</h2>
                            </div>
                            <div className="p-28 bg-white rounded-md text-black shadow-lg">
                                <h2 className='text-xl font-serif'>Stock</h2>
                            </div>
                            <div className="p-28 bg-white rounded-md text-black shadow-lg">
                                <h2 className='text-xl font-serif'>Category</h2>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dashboard
