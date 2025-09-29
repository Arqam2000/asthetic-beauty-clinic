import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const location = useLocation();

  // Pages where you don’t want header/footer
  const noLayoutRoutes = ["/al-quran"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      {!hideLayout && <Navbar />}
      <Outlet/>
      {!hideLayout && <Footer />}
    </div>

      
    </>
  )
}

export default App
