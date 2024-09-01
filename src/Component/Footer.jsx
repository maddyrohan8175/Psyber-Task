import React from 'react'
import tw from '../assets/twitter-logo.png'
import wh from '../assets/whatsapp.png'
import wr from '../assets/wordpress.png'
import x from '../assets/multiplication.png'
import tl from '../assets/telegram.png'
import '../responsive/Footer.css'


export default function Footer() {
    return (
        <div className=' main w-full h-[580px] bg-[#22232D] flex flex-col gap-3'>
            <div className='box w-full h-[75%] bg-[#2A2C38] flex justify-center items-center gap-10'>
                <div className='text-gray-100 w-[45%] px-5 h-[65%] py-10'>
                    <h1 className='text-[#FF9021] font-bold text-xl'>Quick Contact</h1>
                    <p className='text-gray-100  font-semibold mt-5 leading-8'>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. </p>
                    <p className='font-semibold mt-8'><span className='mr-3 text-[#FF9021] text-[15px]'><i class="fa-solid fa-location-dot"></i></span>Sydney, Austrailia</p>
                    <p className='font-semibold mt-3'><span className='mr-3 text-[#FF9021] text-[15px]'><i class="fa-solid fa-phone"></i></span>0468328227</p>
                </div>
                <div className=' boxin bg-[#22232D] w-[45%] h-[65%] rounded-[20px] px-8 py-10'>
                    <h1 className='text-white font-bold text-xl'>Opening Hours</h1>
                    <p className='text-white font-semibold mt-5 tracking-[3px]'><span className='text-[#FF9021]'>Mon to Fri</span><span>..................................</span>
                        9:00am | 5:00pm</p>
                    <p className='text-white font-semibold mt-3 tracking-[3px]'><span className='text-[#FF9021]'>Sat to Sun</span><span>..............................</span>
                        Appointments Only</p>
                    <button className='hover:bg-white bg-[#FF9021] w-[100%] py-3 rounded mt-8 font-bold'>SCHEDULE A VISIT</button>
                </div>
                <div></div>
            </div>
            <div className=' box2 w-full h-[25%] bg-[#2A2C38] flex justify-between items-center px-10'>
                <div className='flex gap-2'>

                    <img src={tl} alt="" className='w-[38px]' />
                    <img src={wr} alt="" className='w-[38px]' />
                    <img src={wh} alt="" className='w-[38px]' />
                    <img src={x} alt="" className='w-[38px]' />
                    <img src={tw} alt="" className='w-[38px]' />

                </div>
                <p className='text-white font-semibold text-center'>2024 © All Rights Reserved | Developed with ❤️ by<span className='text-[#FF9021]'> Psyber Inc</span></p>
            </div>
        </div>
    )
}
