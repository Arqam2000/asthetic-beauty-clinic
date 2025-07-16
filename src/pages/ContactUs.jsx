import React from 'react'
import ContactForm from '../components/ContactForm.jsx'

const ContactUs = () => {
    return (
        <div className='flex min-h-lvh lg:justify-center items-center gap-3 border'>
            <div className='border border-black w-full flex lg:h-[300px]'>
                <div className='bg-orange-300 w-[50%] h-full'>
                    container
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs
