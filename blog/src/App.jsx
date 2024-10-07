import React from 'react';
import Footer from '../src/Pages/Footer/Footer';
import HomePage from '../src/Pages/LandPage/Homepage';
import Blog from './Pages/BlogCard/Blog';
import Navbar from './Pages/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      {/* Each component should have a unique ID for scrolling */}
      <div id='home'>
        <HomePage />
      </div>
      <div id='blog'>
        <Blog />
      </div>
      <div id='contact'>
        <Footer />
      </div>
    </>
  );
};

export default App;
