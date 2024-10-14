import React from 'react';
import {BrowserRouter as Router, Routes ,  Route} from 'react-router-dom';
import Footer from '../src/Pages/Footer/Footer';
import Blog from './Pages/BlogCard/Blog';
import BlogDetail from './Pages/BlogDetail';
import Navbar from './Pages/Navbar/Navbar';
import Layout from './Layout/Layout';
import About from './Pages/About/About';
import PopularBlogs from './Pages/BlogCard/PopularBlog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element = {<Layout/>}></Route>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<PopularBlogs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> 
         <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
    
  );
};

export default App;