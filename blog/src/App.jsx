
import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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