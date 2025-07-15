import React from 'react'
import preTreatmentLogo from "../assets/doctor-visit.png"
import treatmentLogo from "../assets/therapy.png"
import postTreatmentLogo from "../assets/self-consciousness.png"

const WorkingPractice = () => {
    return (
        <div>
            <div className='lg:ml-16 ml-3 my-5 font-semibold'>
                <h1 className='text-3xl'>Our Working Practice</h1>
            </div>
            <div className='flex items-start flex-wrap sm:flex-nowrap gap-4 lg:w-4/5 mx-auto'>
                <div className=' md:w-1/3 w-full sm:w-1/3 p-3 shadow-md shadow-black sm:h-[520px]'>
                    <div>
                        <img src={preTreatmentLogo} alt="" className='w-full' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl'>Pre-Treatment Session</h3>
                        <p>Every treatment begins with a private consultation. Our specialists assess your concerns, examine your facial profile, and recommend the most suitable options for you</p>
                    </div>
                </div>
                <div className=' md:w-1/3 w-full sm:w-1/3 p-3 shadow-md shadow-black sm:h-[520px]'>
                    <div>
                        <img src={treatmentLogo} alt="" className='w-full' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl'>Treatment</h3>
                        <p>After your consultation, we move on to the treatment.  We take great care to make sure everything is done safely and to the highest standard. We want you to leave feeling confident and refreshed.</p>
                    </div>
                </div>
                <div className=' md:w-1/3 w-full sm:w-1/3 p-3 shadow-md shadow-black sm:h-[520px]'>
                    <div>
                        <img src={postTreatmentLogo} alt="" className='w-full' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl'>Post-Treatment Guidance</h3>
                        <p>After your consultation, we move on to the treatment.  We take great care to make sure everything is done safely and to the highest standard. We want you to leave feeling confident and refreshed.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkingPractice
