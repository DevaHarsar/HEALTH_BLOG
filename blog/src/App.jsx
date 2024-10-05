import React from 'react'
import Navbar from './Pages/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const routes = (
  <Router>
    <Routes>
      <Route path='/navbar' element = {<Navbar/>} />
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
