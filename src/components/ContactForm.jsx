import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
// import { sendEmail } from '../sendEmail/sendEmail';
import axios from "axios"

const ContactForm = () => {
    const form = useRef();

  const sendMail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wy6ozsg', 'template_wmzrxae', form.current, {
        publicKey: 'zwlM7yzr_0kZNiU9Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Form submitted successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Cannot submit the form")
        },
      );
  }

    return (
        <div className='lg:w-[66%] h-full  flex flex-col items-center mt-4 bg-[#00000005]'>
            <ToastContainer />
            <h1 className='text-3xl font-semibold my-2'>Send us a message</h1>
            <form ref={form} onSubmit={sendMail} className='flex flex-col gap-3 p-4 items-center sm:w-[100%] md:w-[60%] w-full '>
                <input type="text" placeholder='Name' className='w-full outline p-1 px-3 bg-gray-100' name='Name' required/>
                <input type="email" placeholder='Email' className='w-full outline p-1 px-3 bg-gray-100' name='Email' required/>
                <input type="tel" placeholder='Phone' className='w-full outline p-1 px-3 bg-gray-100' required />
                <textarea placeholder='Message' rows="4" cols="50" className='w-full outline p-1 px-3 bg-gray-100' name='Message' required></textarea>
                <button type='submit' className='bg-[#A64166] py-1 px-3 rounded text-white cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
