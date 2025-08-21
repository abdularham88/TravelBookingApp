import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Booking from './Components/Booking.jsx'
import Login from './Components/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/' ,
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      } ,
      {
       path: "about",
       element: <About/> 
      } ,
      {
       path: "contact",
       element: <Contact/> 
      },
      {
       path: "booking",
       element: <Booking/> 
      },
      {
       path: "login",
       element: <Login/> 
      },
      

    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
