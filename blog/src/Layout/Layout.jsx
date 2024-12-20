import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'
import HomePage from '../Pages/LandPage/Homepage'
import Blog from '../Pages/BlogCard/Blog'
import Footer from '../Pages/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <Navbar/>

    <div id='home'>
        <HomePage/>
    </div>

    <div id='blog'>
        <Blog/>
    </div>
    <div id='contact'>
        <Footer/>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout