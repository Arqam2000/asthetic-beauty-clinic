import React from 'react'

const ContactForm = () => {
    return (
        <div className='lg:w-[66%] h-full  flex flex-col items-center mt-4 bg-[#00000005]'>
            <h1 className='text-2xl font-semibold my-2'>Contact Us</h1>
            <form action="" className='flex flex-col gap-3 p-4 items-center sm:w-[100%] md:w-[60%] w-full '>
                <input type="text" placeholder='Name' className='w-full outline p-1 px-3 bg-gray-100' />
                <input type="email" placeholder='Email' className='w-full outline p-1 px-3 bg-gray-100' />
                <input type="tel" placeholder='Phone' className='w-full outline p-1 px-3 bg-gray-100' />
                <textarea placeholder='Message' rows="4" cols="50" className='w-full outline p-1 px-3 bg-gray-100' ></textarea>
                <button type='submit' className='bg-[#A64166] py-1 px-3 rounded text-white'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
