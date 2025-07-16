import React from 'react'
import tlogo from "../assets/tlogo-white.jpeg"
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className='flex justify-around items-center shadow p-0 m-0 py-4 h-20'>
            <div className='flex items-center gap-2'>
                <div><img src={tlogo} alt="" className='w-16' /></div>
                <h1 className='text-xl font-semibold'>Lam Asthetic Studio</h1>
            </div>

            <div className='hidden md:block'>
                <Link to="/" className='no-underline text-black text-base mr-5'>Home</Link>
                <Link to="/about-us" className='no-underline text-black text-base mr-5'>About Us</Link>
                <Link to="/treatments" className='no-underline text-black text-base mr-5'>Treatments</Link>
                <Link to="/prices" className='no-underline text-black text-base mr-5'>Prices</Link>
                <Link to="/contact-us" className='no-underline text-black text-base '>Contact Us</Link>
            </div>
            <div className='hidden md:block'>
                <Link to="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5'>Book Appointment</Link>
            </div>
            <div className='md:hidden'>
                <span className='text-3xl'>&equiv;</span>
            </div>

        </nav>
    )
}

export default navbar
