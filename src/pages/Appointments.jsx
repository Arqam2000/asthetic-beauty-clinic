import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Appointments = () => {
    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        try {
            const resp = await axios.get("https://lam-backend-sooty.vercel.app/api/v1/appointment")

            if (resp.data.success) {
                const newArr = resp.data.appointments.map(appt => {
                    
                    let newObj = {...appt, bdate: new Date(appt.bdate).toLocaleString()}
                    
                    return newObj
                })
                // console.log("newArr", newArr)
                // console.log("last date:", new Date(resp.data.date).toDateString())
                setAppointments(newArr)
            }
        } catch (error) {
            console.log("Error:", error)
        }
    }

    useEffect(() => {
        getAppointments()
    }, [])
    
    return (
        <div className=' gap-3 items-center flex-1'>
            {/* <h1 className='font-semibold text-2xl text-center'>Appointments</h1> */}
            {/* <div className='flex flex-col gap-3'>
            {
                appointments.map(appointment => (
                    <div className='flex justify-evenly gap-7 items-center border rounded p-2 max-w-4xl mx-auto'>
                        <h1>{appointment.name}</h1>
                        <h1>{appointment.bdate}</h1>
                        <h1>{appointment.email}</h1>
                        <h1>{appointment.phone}</h1>
                    </div>
                ))
            }
        </div> */}

            <main className="max-w-5xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Appointments</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {appointments.map((appt, index) => (
                        <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                            <h3 className="text-lg font-bold text-gray-800">{appt.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{appt.bdate}</p>
                            <p className="text-sm text-gray-700">📧 {appt.email}</p>
                            <p className="text-sm text-gray-700">📞 {appt.phone}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
