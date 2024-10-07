
import Footer from '../../blog/src/Pages/Footer/Footer'
import HomePage from '../../blog/src/Pages/LandPage/Homepage'
import Navbar from '../src/Pages/Navbar/Navbar'
import AddBlog from './Components/AddBlog'
import Blog from './Pages/BlogCard/Blog'



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
    <AddBlog/>
    <Footer/>
   
   
    </>

 
  )
}

export default App