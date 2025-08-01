import { useEffect, useState } from 'react'
import tlogo from "../assets/tlogo-white.jpeg"
import { Link } from 'react-router-dom'
import "./navbar.css"
import { useLocation } from 'react-router-dom'

const navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setIsActive(false)
    }, [location.pathname])

    useEffect(() => {
        if(isActive){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isActive])

    function toggle() {
        setIsActive(prev => !prev)
        
    }
    return (
        <>
        <nav className='flex justify-around items-center shadow p-0 m-0 py-4 h-20'>

            <div className='flex items-center gap-2'>
                <div><img src={tlogo} alt="" className='w-16' /></div>
                <h1 className='text-xl font-semibold'>Lam Aesthetic Studio</h1>
            </div>

            <div className='hidden lg:block '>
                <Link to="/" className='no-underline text-black text-base mr-5'>Home</Link>
                <Link to="/about-us" className='no-underline text-black text-base mr-5'>About Us</Link>
                <Link to="/treatments" className='no-underline text-black text-base mr-5'>Treatments</Link>
                <Link to="/prices" className='no-underline text-black text-base mr-5'>Prices</Link>
                <Link to="/contact-us" className='no-underline text-black text-base '>Contact Us</Link>
            </div>

            <div className='hidden lg:block'>
                <Link to="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5'>Book Appointment</Link>
            </div>
            <div className='lg:hidden z-10' id="menu" onClick={toggle}>
                <span className={`${isActive ? "text-white": "text-black"} text-3xl`}>&equiv;</span>
            </div>

        </nav>

        {/* Mobile Menu */}
        <div className={`${isActive ? "active": "hidden"} hidden`}>
            <Link to="/" className='no-underline text-base mr-5'>Home</Link>
                <Link to="/about-us" className='no-underline text-base mr-5'>About Us</Link>
                <Link to="/treatments" className='no-underline text-base mr-5'>Treatments</Link>
                <Link to="/prices" className='no-underline text-base mr-5'>Prices</Link>
                <Link to="/contact-us" className='no-underline text-base '>Contact Us</Link>
                <Link to="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5'>Book Appointment</Link>
        </div>
        </>
    )
}

export default navbar
