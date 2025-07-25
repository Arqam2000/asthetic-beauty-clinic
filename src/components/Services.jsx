import React from 'react'
import slider1 from "../assets/look-studio-HtXyytr9304-unsplash.jpg"
import slider2 from "../assets/ChatGPT Image Jun 12, 2025, 02_52_57 PM.png"
import slider3 from "../assets/karelys-ruiz-PqyzuzFiQfY-unsplash.jpg"


const Services = () => {
    return (
        <div>
            <div className='ml-10 my-3 font-semibold'>
                <h1 className='text-3xl'>Services</h1>
            </div>
            <div className='flex items-start flex-wrap sm:flex-nowrap lg:mx-10 mx-3 gap-3'>
                <div className=' md:w-1/3 w-full sm:w-1/3 p-3'>
                    <div>
                        <img src={slider1} alt="" className='w-full'/>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mt-2 mb-1'>Botox</h3>
                        <p>A Botox brow lift is a non-surgical cosmetic procedure designed to subtly lift and shape the eyebrows. This technique targets specific muscles in the forehead – relaxing those that pull the brows downward while allowing the upward-pulling muscles to create a gentle elevation. Read More</p>
                    </div>
                </div>
                <div className=' md:w-1/3 w-full sm:w-1/3 p-3'>
                    <div>
                        <img src={slider2} alt="" className='w-full'/>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mt-2 mb-1'>Derma filler</h3>
                        <p>Dermal fillers, also known as soft tissue fillers, are injectable substances used to restore facial volume, smooth lines, and enhance contours by adding fullness to the skin. They are commonly used to address signs of aging, such as wrinkles, fine lines, and sagging skin, and can also be used to augment facial features like lips and cheeks. Read more</p>
                    </div>
                </div>
                <div className=' md:w-1/3 w-full sm:w-1/3 p-3'>
                    <div>
                        <img src={slider3} alt="" className='w-full'/>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mt-2 mb-1'>Profhilo/skin booster</h3>
                        <p>Profhilo is pure hyaluronic acid injectable skin treatment containing one of the highest concentrations of Hyaluronic Acid to treat  skin laxity and improve and restore firmness of the skinue. Read more</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
