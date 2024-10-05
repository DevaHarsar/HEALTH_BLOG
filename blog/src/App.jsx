
import Navbar from './Pages/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'
import HomePage from './Pages/LandPage/HomePage'
import BlogCard from './Pages/BlogCard/BlogCard'




const routes = (
  <Router>
    <Routes>
      
      <Route path='/navbar' element = {<Navbar/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/Footer' element = {<Footer/>} />
      <Route path='/Blog' element = {<BlogCard/>} />
    </Routes>
   
   
  </Router>
)


const App = () => {
  return (
    <div>
      {routes}
    </div> 
  )
}

export default App