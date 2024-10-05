import React from 'react'
import Footer from '../../blog/src/Pages/Footer/Footer'
import LandPage from '../../blog/src/Pages/LandPage/LandPage'
import BlogCard from './Pages/BlogCard/BlogCard'
import Navbar from './Pages/Navbar/Navbar'




const App = () => {
  return (
  <div>

<Navbar/>
<LandPage/>
<BlogCard/>
<Footer/>


  </div> 
  )
}

export default App