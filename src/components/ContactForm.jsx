import React from 'react'

const ContactForm = () => {
    return (
        <div className='lg:w-[50%]'>
            <h1>Contact Us</h1>
            <form action="" className='bg-gray-300 flex flex-col gap-3  p-4  items-center sm:w-[100%] md:w-[60%] w-full'>
                <input type="text" placeholder='Name' className='w-full outline p-1 px-3' />
                <input type="email" placeholder='Email' className='w-full outline p-1 px-3' />
                <input type="tel" placeholder='Phone' className='w-full outline p-1 px-3' />
                <button type='submit' className='bg-[#A64166]'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
