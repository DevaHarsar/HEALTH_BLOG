
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from URL parameters
  const [blog, setBlog] = useState(null);
  console.log(id);

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
    <div className='mt-20 p-4'>
      <h1 className='text-3xl font-bold'>{blog.title}</h1>
      <img src={blog.imageURL} alt={blog.title} className='mt-4 rounded-lg' />
      <p className='mt-6 text-lg'>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;