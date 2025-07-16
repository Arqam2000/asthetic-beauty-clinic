import React from 'react'
import tlogo from "../assets/tlogo.png"
import locationLogo from "../assets/arrows.png"
import phoneLogo from "../assets/telephone.png"
import emailLogo from "../assets/letter.png"

const Footer = () => {
    return (
        <div className='flex flex-col mt-4 text-white '>
            <div className='bg-[#4B54AD] px-10 py-3 flex lg:justify-between flex-col lg:flex-row'>
                {/* first portion */}
                <div className='flex gap-4 flex-col lg:flex-row items-center lg:items-start'>
                    <div className='w-20'>
                        <img src={tlogo} alt="logo" className='' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1 className='font-semibold text-xl'>Lam Asthetic Studio</h1>
                        </div>
                        <div className='flex flex-col justify-center lg:gap-2 gap-3'>
                            <div className='flex items-center'>
                                <div className='w-6'>
                                    <img src={locationLogo} alt="location" />
                                </div>
                                <p className='text-sm'>Location</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-6'>
                                    <img src={phoneLogo} alt="phone" />
                                </div>
                                <p className='text-sm'>07974230704</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <div className='w-5'>
                                    <img src={emailLogo} alt="email" />
                                </div>
                                <p className='text-sm'>toobasharaf@aol.com</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* second portion */}
                <div className='flex flex-col items-center lg:flex-row gap-2 my-3 lg:my-0 lg:items-start'>
                    <a href="" className='no-underline text-base mr-6'>Home</a>
                    <a href="" className='no-underline text-base mr-6'>About Us</a>
                    <a href="" className='no-underline text-base mr-6'>Treatments</a>
                    <a href="" className='no-underline text-base mr-6'>Prices</a>
                </div>
                {/* third portion */}
                <div className='flex flex-col items-center lg:flex-row lg:items-start lg:gap-1 gap-3 '>
                    <div className='flex flex-col lg:gap-2 gap-3'>
                        <h1 className='text-xl font-semibold self-center'>Working Time</h1>
                        <p className='text-sm'>Mon, Wed, Fri: 2:00PM - 7:00PM</p>
                        <p className='text-sm'>Tue, Thu: 5:00PM - 7:00PM</p>
                    </div>
                    <button className='bg-white text-[#4B54AD] px-3 py-1 rounded-full font-medium'>Book Appointment</button>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className='bg-[#4B54AD] h-10 flex items-center justify-center border-t border-t-gray-400'>
                <p className='text-white text-sm'>Copyright © 2025 Asthetic Studio</p>
            </div>
        </div>
    )
}

export default Footer
