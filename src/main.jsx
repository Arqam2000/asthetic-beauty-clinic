import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AboutUs from './pages/AboutUs.jsx'
import Treatments from './pages/Treatments.jsx'
import Prices from './pages/Prices.jsx'
import BookAppointment from './pages/BookAppointment.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "treatments",
        Component: Treatments,
      },
      {
        path: "prices",
        Component: Prices,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
      {
        path: "book-appointment",
        Component: BookAppointment,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* <ContactUs/> */}
  </StrictMode>,
)
