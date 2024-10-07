import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../src/Pages/Footer/Footer';
import HomePage from '../src/Pages/LandPage/Homepage';
import Blog from './Pages/BlogCard/Blog';

import BlogDetail from './Pages/BlogDetails';
import Navbar from './Pages/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> 
         <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
