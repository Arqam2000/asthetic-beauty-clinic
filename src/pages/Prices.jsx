import React from 'react'
import { Link } from 'react-router-dom'

const Prices = () => {
  return (
    <div>
      <div>

      </div>
      <div className='lg:w-[76%] w-[90%] mx-auto flex flex-col items-center p-3 mt-3 bg-[#00000005]'>
        <div className='pb-5 border-b-[1px] border-b-[#dcbae3] w-full text-center'>
          <h1 className='lg:text-3xl text-2xl font-bold font-sans'>Prices</h1>
        </div>
        <div className='p-3 pt-0 px-0 mx-20 w-full'>
          <div className='flex justify-between p-3 border-b-[1px] border-b-[#dcbae3]'>
            <div><h2 className='font-semibold'>Lip Fillers</h2></div>
            <div><p>155 /210£</p></div>
          </div>
          <div className='flex justify-between p-3 border-b-[1px] border-b-[#dcbae3]'>
            <div><h2 className='font-semibold'>Botox</h2></div>
            <div><p>150£</p></div>
          </div>
          <div className='flex justify-between p-3 border-b-[1px] border-b-[#dcbae3]'>
            <div><h2 className='font-semibold'>Nasolabial Folds</h2></div>
            <div><p>200£</p></div>
          </div>
          <div className='flex justify-between p-3 border-b-[1px] border-b-[#dcbae3]'>
            <div><h2 className='font-semibold'>Frown Line</h2></div>
            <div><p>150£</p></div>
          </div>
          <div className='flex justify-between p-3 border-b-[1px] border-b-[#dcbae3]'>
            <div><h2 className='font-semibold'>Marionette Line</h2></div>
            <div><p>150£</p></div>
          </div>
          <div className='flex justify-between p-3 border-b-[1px] border-b-[#dcbae3]'>
            <div><h2 className='font-semibold'>Portfolio Treatment</h2></div>
            <div><p>190£</p></div>
          </div>
          
        </div>
        <Link to="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5 my-2'>Book Appointment</Link>
      </div>
    </div>
  )
}

export default Prices
