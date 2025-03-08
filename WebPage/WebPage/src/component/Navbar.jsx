import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './HOme';
import logobg from "../assets/logobg.png";
import { FaFacebookF, FaTwitter, FaRegCircleUser, FaArrowRight } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { HiMiniClock } from "react-icons/hi2";
import { navLinks } from '../data/header';
import About from './About';
import Services from './Services';
import Logo from './Logo';
import Investigator from './Investigator';

const Navbar = () => {

    const socialLinks = [
        { icon: <FaFacebookF />, path: "/" },
        { icon: <FaTwitter />, path: "/" },
        { icon: <RiInstagramFill />, path: "/" },
    ];

    return (
        <div>
            {/* Top Navbar */}
            <div className='flex justify-between bg-black text-white text-lg font-semibold py-2 px-4'>
                <div className='flex'>
                    <NavLink to="/" className="flex">
                        <MdEmail className='me-2 mt-2 text-red-600' />info@example.com
                    </NavLink>
                    <NavLink to="/" className="flex ps-10">
                        <HiMiniClock className='me-2 mt-2 text-red-600' /> Open Hours: Mon - Fri 8:00 AM - 6:00 PM
                    </NavLink>
                </div>
                <div className='flex'>
                    <NavLink to="/" className="flex pe-5">
                        <FaRegCircleUser className='me-2 mt-2 text-red-600' /> Login
                    </NavLink>
                    {socialLinks.map((link, index) => (
                        <NavLink key={index} to={link.path} className="pe-5 pt-2">
                            {link.icon}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Logo */}
            <div>
                <img src={logobg} alt="Logo" className='relative' />
            </div>

            {/* Main Navbar */}
            <div className='flex justify-between absolute top-11 px-5 w-full'>
                <div className='py-8 flex justify-center font-semibold text-xl'>
                    {navLinks.map((link, index) => (
                        <NavLink key={index} to={link.path} className={"ps-10"}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                <button className='px-2 py-2 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-600 hover:via-red-500 hover:to-red-500 h-12 mt-6 text-white text-lg flex transition-duration: 0ms;'>
                    Let's Contract <FaArrowRight className='ms-2 mt-2' />
                </button>
            </div>
            {/* Home Component */}
            <Home />
            <About />
            <Services />
            <Logo />
            <Investigator />
        </div>
    );
};

export default Navbar;
