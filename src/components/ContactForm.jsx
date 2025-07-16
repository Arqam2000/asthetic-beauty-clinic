import React from 'react'

const ContactForm = () => {
    return (
        <div className='lg:w-[50%] border flex flex-col items-center'>
            <h1 className='text-xl '>Contact Us</h1>
            <form action="" className='flex flex-col gap-3 p-4 items-center sm:w-[100%] md:w-[60%] w-full border'>
                <input type="text" placeholder='Name' className='w-full outline p-1 px-3 bg-gray-200' />
                <input type="email" placeholder='Email' className='w-full outline p-1 px-3 bg-gray-200' />
                <input type="tel" placeholder='Phone' className='w-full outline p-1 px-3 bg-gray-200' />
                <button type='submit' className='bg-[#A64166] py-1 px-3 rounded text-white'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
