import axios from 'axios';
import React, { useState } from 'react';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageurl, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setMessage('Title and description are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3333/add', {
        title: title,
        description: description,
        imageURL: imageurl, // This should now contain a valid URL
      });

      console.log(response.data);

      setTitle('');
      setDescription('');
      setImage('');
      setMessage('Blog post added successfully!');
    } catch (error) {
      console.error('There was an error adding the blog!', error);
      setMessage('Failed to add blog post');
    }
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload=() =>{
     
      setImage(reader.result);
    }

   
  };

  return (
    <div className='mt-20 px-10'>
      <h1 className='primary_text text-[36px] max-sm:text-[22px]'>
        Add a New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className='mt-10'>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Blog Title
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Enter blog title'
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Blog Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            rows='5'
            placeholder='Enter blog description'
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Upload Blog Image
          </label>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange} 
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

      
        <button
          type='submit'
          className='px-6 py-2 bg-[#d59900] text-white rounded-lg hover:bg-[#b88b00] transition duration-300'>
          Submit Blog Post
        </button>
      </form>

      {message && (
        <p className='mt-5 text-[16px] text-center text-[#d59900]'>{message}</p>
      )}
    </div>
  );
};

export default AddBlog;
