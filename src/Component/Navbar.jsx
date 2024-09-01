import React, { useState } from 'react';
import pic from '../assets/logo1.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaChevronDown, FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className='w-full flex justify-center md:justify-end px-4 md:px-10 bg-[#2A2C38] h-[60px]'>
                <ul className='text-white text-[12px] md:text-[16px] flex items-center h-[60px] gap-2 md:gap-3'>
                    <li className='flex items-center'><span className='mr-1 md:mr-2 text-[#FF9021] text-[12px] md:text-[15px]'><FaMapMarkerAlt /></span>Sydney, Australia</li>
                    <li className='flex items-center'><span className='mr-1 md:mr-2 text-[#FF9021] text-[12px] md:text-[15px]'><FaPhoneAlt /></span>0468328227</li>
                    <li className='flex items-center'><span className='mr-1 md:mr-2 text-[#FF9021] text-[12px] md:text-[15px]'><FaClock /></span>Mon - Fri: 9:00am - 5:00pm </li>
                    <li className='flex items-center'><span className='mr-1 md:mr-2 text-[#FF9021] text-[12px] md:text-[15px]'><FaClock /></span>Weekends Appointments Only</li>
                </ul>
            </div>
            
            {/* Navbar */}
            <div className='w-full bg-white h-auto md:h-[100px] flex flex-col md:flex-row justify-between px-4 md:px-10 items-center border-b border-gray-200'>
                {/* Logo */}
                <img src={pic} alt="Logo" className='w-[180px] md:w-[260px] mb-4 md:mb-0' />

                {/* Menu Toggle for Mobile */}
                <button 
                    className='block md:hidden text-[#2A2C38] text-2xl focus:outline-none'
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <FaBars />
                </button>

                {/* Navigation Items */}
                <div className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                    <ul className='flex flex-col md:flex-row items-center gap-4 text-black font-semibold text-[12px] md:text-[14px]'>
                        <li className='cursor-pointer py-4 px-2 md:py-9 md:px-3 hover:text-[#FF9021]'>HOME</li>
                        <li className='cursor-pointer py-4 px-2 md:py-9 md:px-3 hover:bg-[#2A2C38] hover:text-white'>ABOUT US</li>
                        <li className='cursor-pointer py-4 px-2 md:py-9 md:px-3 hover:bg-[#2A2C38] hover:text-white'>
                            SERVICES <FaChevronDown className='inline ml-1' />
                        </li>
                        <li className='cursor-pointer py-4 px-2 md:py-9 md:px-3 hover:bg-[#2A2C38] hover:text-white'>FAQ'S</li>
                    </ul>
                    <button className='px-4 py-3 md:px-5 md:py-4 bg-[#2A2C38] text-white text-[12px] md:text-[13px] rounded-md font-semibold transform transition-transform duration-300 hover:scale-110'>
                        CALL US ANYTIME
                    </button>
                </div>
            </div>
        </>
    );
}
