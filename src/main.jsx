import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import Services from './components/Services.jsx'
import WorkingPractice from './components/WorkingPractice.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Slider/>
    <Services/>
    <WorkingPractice/>
    <Footer/>
  </StrictMode>,
)
