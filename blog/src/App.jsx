import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'
import Navbar from './Pages/Navbar/Navbar'

const routes = (
  <Router>
    <Routes>
      <Route path='/navbar' element = {<Navbar/>} />
    </Routes>
    
    <Routes>
      <Route path='/Footer' element = {<Footer/>} />
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