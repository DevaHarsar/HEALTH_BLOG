
import Navbar from '../src/Pages/Navbar/Navbar'

  import AddBlog from './Components/AddBlog'



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
    <AddBlog/>
    {/* <HomePage/>
    <Blog/>
    <BlogPost/>
    <Footer/> */}
    </>

 
  )
}

export default App