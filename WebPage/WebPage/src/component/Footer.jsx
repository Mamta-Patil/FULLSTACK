import React from 'react'
import ftlogo from "../assets/ftlogo.png"
import footer from "../assets/footer.jpg"
import { quickLink, Links, contact } from '../data/footer'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='relative'>
            <img src={footer} alt="" className='' />
            <div className='absolute top-0'>
                <div className='grid grid-cols-4 text-white px-10 gap-14'>
                    <div className='mt-12'>
                        <img src={ftlogo} alt="" />
                        <p className='text-ft pt-5'>Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit udin netus quis ornare. Massa pharetra in nec sed nunc.</p>
                        <p className='text-ft pt-5'>nisl viverra massa imperdiet. Dui mattis quis congue fames.</p>
                    </div>
                    <div className='mt-16 ms-10'>
                        <p className='text-2xl font-bold'>Quick Link</p>
                        {
                            quickLink.map((link, index) => (
                                <div className=''>
                                    <p className='pt-2 text-ft font-bold'> {link.link} </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-16'>
                        <p className='text-2xl font-bold'>Usefull Links</p>
                        {
                            Links.map((link, index) => (
                                <div className=''>
                                    <p className='pt-2 text-ft font-bold'> {link.link} </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-16'>
                        <p className='text-2xl font-bold'>Contact</p>
                        {
                            contact.map((items, index) => (
                                <div className=''>
                                    <p className='pt-2 text-ft font-bold'> {items.title} </p>
                                    <p className='pt-2 text-ft font-bold'> {items.loc} </p>
                                    <Link to={"/"} className='pt-2'> {items.email}  </Link>  <br />
                                    <Link to={"/"}>{items.phone}  </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <p className='text-white text-center py-10 bg-[black]'>Copyright 2024 by Insight template All Right Reserved.</p>
        </div>
    )
}

export default Footer
