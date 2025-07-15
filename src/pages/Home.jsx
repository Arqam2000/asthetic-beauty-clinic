import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Slider from '../components/Slider.jsx'
import Services from '../components/Services.jsx'
import WorkingPractice from '../components/WorkingPractice.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Services />
            <WorkingPractice />
            <Footer />
        </div>
    )
}

export default Home
