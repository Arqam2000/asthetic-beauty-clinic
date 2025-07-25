import React from 'react'
import preTreatmentLogo from "../assets/doctor-visit.png"
import treatmentLogo from "../assets/therapy1.png"
import postTreatmentLogo from "../assets/self-consciousness1.png"

const WorkingPractice = () => {
    return (
        <div>
            <div className='lg:ml-16 ml-3 my-5 font-semibold'>
                <h1 className='text-3xl'>Our Working Practice</h1>
            </div>
            <div className='flex items-start justify-center flex-wrap sm:flex-nowrap gap-4'>
                <div className=' md:w-[25%] w-[70%] sm:w-1/3 p-3 shadow-md shadow-black sm:h-[470px] md:h-[450px] lg:h-[380px]'>
                    <div className='flex justify-center'>
                        <img src={preTreatmentLogo} alt="" className='w-[170px]' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mt-3 mb-1'>Pre-Treatment Session</h3>
                        <p className='text-justify'>Every treatment begins with a private consultation. Our specialists assess your concerns, examine your facial profile, and recommend the most suitable options for you</p>
                    </div>
                </div>
                <div className=' md:w-[25%] w-[70%] sm:w-1/3 p-3 shadow-md shadow-black sm:h-[470px] md:h-[450px] lg:h-[380px]'>
                    <div className='flex justify-center'>
                        <img src={treatmentLogo} alt="" className='w-[170px]' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mt-3 mb-1'>Treatment</h3>
                        <p className='text-justify'>After your consultation, we move on to the treatment.  We take great care to make sure everything is done safely and to the highest standard. We want you to leave feeling confident and refreshed.</p>
                    </div>
                </div>
                <div className=' md:w-[25%] w-[70%] sm:w-1/3 p-3 shadow-md shadow-black sm:h-[470px] md:h-[460px] lg:h-[380px]'>
                    <div className='flex justify-center'>
                        <img src={postTreatmentLogo} alt="" className='w-[170px]' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mt-3 mb-1'>Post-Treatment Guidance</h3>
                        <p className='text-justify'>After your consultation, we move on to the treatment.  We take great care to make sure everything is done safely and to the highest standard. We want you to leave feeling confident and refreshed.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkingPractice
