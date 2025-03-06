import React, { useState } from 'react'

const DarkMode = () => {
    const [darkmode, setDarkmode] = useState(true)
    return (
        <div>
            {/* <div className='bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring shadow-lg ring-gray-900/5 mt-40 mx-9'> */}
            {/* <button onClick={setDarkmode(!darkmode)}> Switch  </button> */}
            {/* {
                (darkmode==true) ? ( <p class="text-slate-900 bg-white-50 mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>) : ( <p class="bg-black text-white mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>)
            } */}
            {/* </div> */}
            {/* className={`mb-4 ${item.height} ${item.bg} text-white rounded-lg p-4 shadow-md flex items-center justify-center`} */}


            <button onClick={() => setDarkmode(!darkmode)} className='border-2 border-slate-800 bg-slate-900 text-white p-2 text-xl mt-10 ms-10'>
                {
                    (!darkmode) ? ("Light Mode") : ("Dark Mode") 
                }
            </button>
            <div className="mt-10 mx-9">
                {darkmode ? (
                    <p className="text-slate-900 bg-white pt-2 text-lg font-serif">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                ) : (
                    <p className="bg-black text-white text-lg font-serif p-2">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                )}
            </div>
        </div>
    )
}

export default DarkMode
