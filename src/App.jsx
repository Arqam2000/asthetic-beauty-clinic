import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
    <div className='flex flex-col min-h-screen'>

      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>

      
    </>
  )
}

export default App
