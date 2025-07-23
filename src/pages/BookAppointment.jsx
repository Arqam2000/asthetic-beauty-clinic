import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const BookAppointment = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_wy6ozsg', 'template_sd3r439', form.current, {
        publicKey: 'zwlM7yzr_0kZNiU9Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Appointment booked successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Cannot booked the appointment")
        },
      );
  }

  return (
    <>
      <h1 className='text-3xl font-semibold text-center my-3 mb-7'>Appointment</h1>
      <ToastContainer />
      <div className='flex lg:gap-20 gap-4 flex-col md:flex-row justify-center items-center md:items-start  my-5'>
        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <div>
            <h1 className='text-[#333333] md:text-4xl text-2xl'>We would love to serve You.</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[#4a4a4a]'>Business Hours</h3>
            <p>Mon, Wed, Fri: 2:00PM - 7:00PM </p>
            <p>Tue, Thu: 5:00PM - 7:00PM </p>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
            <input type="text" placeholder='First Name' className='outline p-1 px-3' name='Fname' required/>
            <input type="text" placeholder='Last Name' className='outline p-1 px-3' name='Lname' required/>
            <input type="email" placeholder='Email' className='outline p-1 px-3' name='Email' required/>
            <input type="tel" placeholder='Phone' className='outline p-1 px-3' name='Phone' required/>
            <input type="datetime-local" name="time" id="" className='outline p-1 px-3' required/>
            <button className='bg-[#A64166] text-white rounded-full py-2 cursor-pointer' type='submit'>Book Appointment</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookAppointment
