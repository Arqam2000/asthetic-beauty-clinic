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
import { AddReview } from './pages/AddReview.jsx'
import { Reviews } from './pages/Reviews.jsx'
import { BeforeandAftercare } from './pages/Before&Aftercare.jsx'
import { Appointments } from './pages/Appointments.jsx'
import TheBook from "./pages/TheBook.jsx"
import { HelmetProvider } from 'react-helmet-async';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "aftercare",
        Component: BeforeandAftercare,
      },
      {
        path: "prices",
        Component: Prices,
      },
      {
        path: "add-review",
        Component: AddReview,
      },
      {
        path: "reviews",
        Component: Reviews,
      },
      {
        path: "appointments",
        Component: Appointments,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
      {
        path: "book-appointment",
        Component: BookAppointment
      },
      {
        path: "al-quran",
        Component: TheBook
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HelmetProvider >
      <RouterProvider router={router} />
    </HelmetProvider>
  // </StrictMode>,
)
