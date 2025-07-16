import React from 'react'
import tlogo from "../assets/tlogo-white.jpeg"

const navbar = () => {
    return (
        <nav className='flex justify-around items-center shadow p-0 m-0 py-4 h-20'>
            <div className='flex items-center gap-2'>
                <div><img src={tlogo} alt="" className='w-16' /></div>
                <h1 className='text-xl font-semibold'>Lam Asthetic Studio</h1>
            </div>

            <div className='hidden md:block'>
                <a href="" className='no-underline text-black text-base mr-5'>Home</a>
                <a href="" className='no-underline text-black text-base mr-5'>About Us</a>
                <a href="" className='no-underline text-black text-base mr-5'>Treatments</a>
                <a href="" className='no-underline text-black text-base mr-5'>Prices</a>
                <a href="contact-us" className='no-underline text-black text-base '>Contact Us</a>
            </div>
            <div className='hidden md:block'>
                <button className='bg-[#A64166] text-white rounded-full py-2 px-5'>Book Appointment</button>
            </div>
            <div className='md:hidden'>
                <span className='text-3xl'>&equiv;</span>
            </div>

        </nav>
    )
}

export default navbar
