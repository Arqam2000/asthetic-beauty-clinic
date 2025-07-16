import React from 'react'
import slider1 from "../assets/look-studio-HtXyytr9304-unsplash.jpg"
import slider2 from "../assets/Slider.png"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const Slider = () => {

    const images = [
        slider1,
        slider2,

    ];

    return (
        <div>
            <Slide autoplay={true} infinite duration={5000}>
                {
                    images.map((image, index) => (
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${image})` }}>
                                <div className='mx-2 mb-2 lg:mx-11'>
                                    <h1 className='lg:text-xl font-bold text-base text-[#ff0a64] italic'>Asthetic Excellence for Ageless Beauty</h1>
                                </div>
                                <div className='lg:w-2/6 w-[290px]  flex flex-col gap-2 lg:ml-10 ml-2  bg-gray-300 opacity-65 px-2'>
                                    
                                    <p className='font-normal text-justify text-sm text-black'><span className='italic font-medium text-base block'>Welcome to Lam Aesthetics Clinic</span> Your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Dermal Fillers, and Skin Boosters, we help you look and feel your best.

                                    </p >
                                    <p className='font-xl font-semibold text-justify text-base text-red-600'>Consultations for FREE!</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slide>

        </div>
    )
}

export default Slider
