
import Navbar from './Pages/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'


const routes = (
  <Router>
    <Routes>
      
      <Route path='/navbar' element = {<Navbar/>} />
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