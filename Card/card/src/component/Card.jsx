
import React from 'react';
import Image from 'next/image';
import user from "../../public/user.png";

const Card = () => {
    return (
        <div className='py-10 ps-20 bg-blue-50'>
            <div className='bg-white shadow-md rounded-2xl px-10 py-10 w-[600px] relative'>
                <p className='text-2xl font-serif'>UI/UX Design</p>
                <p className='text-2xl font-bold text-[25px] leading-8 pt-4'>
                    The Complete UI/UX Design Theory for Beginners Course
                </p>
                <p className='text-[20px] text-black pt-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, officia! Voluptate sed
                </p>
                <div className="flex pt-10">
                    <div>
                        <Image
                            src={user}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                            className="rounded-full"
                        />
                    </div>
                    <div className='ps-6'>
                        <p>Jack Sparrow</p>
                        <p>12 Sessions</p>
                    </div>
                </div>
                <div className="flex bg-blue-300 shadow-md absolute bottom-0 right-0 rounded-md w-[200px] h-20 pt-6 ps-8">
                    <div>
                        <Image
                            src={user}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                            className="rounded-full"
                        />
                    </div>
                    <div className='pt-3 ps-2'>
                        <p>Watch Now </p>
                    </div>
            </div>
            </div>

          
        </div>
    );
};

export default Card;