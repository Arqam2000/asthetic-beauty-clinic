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
                                <div className='lg:w-2/6 w-[258px]  flex flex-col gap-2 lg:ml-10 ml-2  bg-gray-300 opacity-65'>
                                    <h1 className='lg:text-3xl font-bold text-base'>Asthetic Excellence for Ageless Beauty</h1>
                                    <p className='font-xl font-normal text-justify text-base'>Welcome to Lam Aesthetics Clinic — your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Dermal Fillers, and Skin Boosters, we help you look and feel your best.

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
