
import HomePage from '../src/Pages/LandPage/Homepage'
import Navbar from '../src/Pages/Navbar/Navbar'
import Blog from './Pages/BlogCard/Blog'

  import Footer from './Pages/Footer/Footer'



// router vendaaaaaam
// const routes = (
//   <Router>
//     <Routes>
      
//       <Route path='/navbar' element = {<Navbar/>} />
//       <Route path='/' element={<HomePage/>} />
//       <Route path='/Blog' element = {<Layout/>} />
//       <Route path='/Footer' element = {<Footer/>} />
//     </Routes>
   
   
//   </Router>
// )


const App = () => {
  return (
    // <div>
    //   {routes}
    // </div> 
<>
    <Navbar/>
    <HomePage/>
    <Blog/>
    <Footer/>
    </>

 
  )
}

export default App