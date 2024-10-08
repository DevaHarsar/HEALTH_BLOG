import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiOutlineLink, AiFillHeart } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from URL parameters
  const [blog, setBlog] = useState(null);
  console.log(id);

  // const handleLikeClick = () => {
  //   setLiked(!liked);  
  // };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3333/${id}`); // Fetch the specific blog by ID
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Failed to fetch the blog post:', error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
    <Navbar/>
    {/* <div className='mt-20 p-4'>
      <h1 className='text-3xl font-bold'>{blog.title}</h1>
      <img src={blog.imageURL} alt={blog.title} className='mt-4 rounded-lg' />
      <p className='mt-6 text-lg'>{blog.content}</p>
    </div> */}


    <div className=" h-full m-2">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

            {/* Main Blog Section */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {blog.title}
                    </h1>
                    <p className="text-sm text-gray-500">By Admin · Oct 6, 2024 · 5 min read</p>
                </div>
                
                <img 
                    src={blog.imageURL}  
                    alt={blog.title} 
                    className="rounded-lg w-full h-[60%] mt-3 transform transition-transform hover:scale-95 duration-500 border-2" 
                />
                
                <p className="text-gray-700 mb-4 mt-2">
                {blog.description}
                </p>
                <p className="text-gray-700 mb-4">
                    In this blog, we’ll explore various workout regimes, the importance of nutrition, and how mental health plays a vital role in achieving your fitness goals. Whether you're a beginner or an experienced fitness enthusiast, there's something here for everyone.
                </p>
                <p className="text-gray-700">
                    Ready to take the next step towards a stronger, healthier you? Let’s dive into tips, workouts, and fitness trends that will help you stay on track.
                </p>
            </div>

            {/* Sidebar Section */}
            <div className='flex items-center justify-center h-full w-2xl'>
            <div className="bg-slate-400 p-6 rounded-lg shadow-lg flex flex-col justify-between h-[65%]">
                <div className="flex flex-col items-center">
                    <img 
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" 
                    alt="Fitness Author" 
                    className="rounded-full w-28 h-28 object-cover mb-4 shadow-md transform transition-transform hover:scale-110 duration-500" 
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hi, Fitness Enthusiast!</h2>
                    <p className="text-gray-600 text-center mb-4">
                    I’m your guide to a healthier, stronger lifestyle. Join me as I share insights on how to stay fit, both physically and mentally.
                    </p>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                    Start Your Journey
                    </button>
                </div>

                {/* Social Icons and Like Button */}
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                        <AiFillFacebook size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                        <AiOutlineTwitter size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-700">
                        <AiFillLinkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                        <AiOutlineLink size={24} />
                    </a>
                    </div>

                    <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>10 views</span>
                    <span className="flex items-center space-x-1">
                        <span>3</span>
                          <span><AiFillHeart className='size-5 text-red-500'></AiFillHeart></span>
                    </span>
                    </div>
                </div>
                </div>
            </div>
      </div>
    </div>

    </>
  );




};

export default BlogDetail;