<<<<<<< HEAD

import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
=======
import React from 'react'
import Navbar from './Pages/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'
>>>>>>> bfc6db5431a81dadc593c84d4643dbaff200c13b

const routes = (
  <Router>
    <Routes>
<<<<<<< HEAD
       <Route path='/navbar' element = {<Navbar/>} />
    
=======
      <Route path='/navbar' element = {<Navbar/>} />
    </Routes>
    
    <Routes>
>>>>>>> bfc6db5431a81dadc593c84d4643dbaff200c13b
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