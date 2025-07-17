import React from 'react'

const BookAppointment = () => {
  return (
    <>
      <h1 className='text-3xl font-semibold text-center my-3 mb-7'>Appointment</h1>
      <div className='flex gap-20 justify-center items-start my-5'>
        <div className='flex flex-col justify-center gap-4'>
          <div>
            <h1 className='text-[#333333] text-4xl'>We would love to serve You.</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[#4a4a4a]'>Business Hours</h3>
            <p>Mon, Wed, Fri: 2:00PM - 7:00PM </p>
            <p>Tue, Thu: 5:00PM - 7:00PM </p>
          </div>
        </div>
        <div>
          <form action="" className='flex flex-col gap-3'>
            <input type="text" placeholder='First Name' className='outline p-1 px-3'/>
            <input type="text" placeholder='Last Name' className='outline p-1 px-3'/>
            <input type="email" placeholder='Email' className='outline p-1 px-3'/>
            <input type="tel" placeholder='Phone' className='outline p-1 px-3'/>
            <input type="datetime-local" name="" id="" className='outline p-1 px-3'/>
            <button className='bg-[#A64166] text-white rounded-full py-2 ' type='submit'>Book Appointment</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookAppointment
