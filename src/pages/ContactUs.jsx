import React from 'react'
import ContactForm from '../components/ContactForm.jsx'

const ContactUs = () => {
    return (
        <div className='flex bg-gray-400 min-h-lvh lg:justify-center items-center gap-3'>
            <div className='border border-black'>
                <div className='bg-orange-300 w-[50%] h-full'>
                    container
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs
