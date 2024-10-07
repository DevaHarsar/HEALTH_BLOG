
import Footer from '../../blog/src/Pages/Footer/Footer'
import HomePage from '../src/Pages/LandPage/Homepage'
import Blog from './Pages/BlogCard/Blog'
import Navbar from './Pages/Navbar/Navbar'



// router vendaaaaaam
// const routes = (
//   <Router>
//     <Routes>
      
//       <Route path='/navbar' element = {<Navbar/>} />
//       <Route path='/' element={<HomePage/>} />
//       <Route path='/Blog' element = {<Layout/>} />
//       <Route path='/Footer' elemenjt = {<Footer/>} />
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
    {/* <BlogPost/> */}
    {/* <AddBlog/> */}
    <Footer/>
   
   
    </>

 
  )
}

export default App