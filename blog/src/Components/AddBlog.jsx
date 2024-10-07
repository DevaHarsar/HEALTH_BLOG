import axios from 'axios';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const AddBlog = ({ handleClose }) => {
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
        title,
        description,
        imageURL: imageurl,
      });

      console.log(response.data);
      setTitle('');
      setDescription('');
      setImage('');
      setMessage('Blog post added successfully!');

      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error('There was an error adding the blog!', error);
      setMessage('Failed to add blog post');
    }
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className='fixed inset-2 z-10 flex justify-center items-center'>
      <div className='relative w-5/12 max-w-lg bg-gradient-to-r from-gray-800 to-blue-950 opacity-98 shadow-lg p-8 rounded-2xl'>
        <button
          onClick={handleClose}
          className='absolute top-5 right-7 text-white text-xl hover:text-red-400'
        >
          <MdClose />
        </button>

        <h1 className='text-2xl text-white font-bold text-center'>
          Add a New Blog Post
        </h1>

        <form onSubmit={handleSubmit} className='mt-6'>
          <div className='mb-4'>
            <label className='block mb-2 text-sm text-white'>
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

          <div className='mb-4'>
            <label className='block mb-2 text-sm text-white'>
              Blog Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              rows='4'
              placeholder='Enter blog description'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-sm text-white'>
              Upload Blog Image
            </label>
            <div className='flex items-center pt-2'>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='block w-full text-sm text-gray-400 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-3 focus:ring-blue-500'
              />
              <FaUpload className='ml-3 text-white text-lg cursor-pointer' />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-6 py-2 mt-2 bg-[#9b8e20] text-white rounded-lg hover:bg-[#4b882a] transition duration-300'
          >
            Submit Blog Post
          </button>
        </form>

        {message && (
          <p className='mt-4 text-[16px] text-center text-[#1b4b6e]'>{message}</p>
        )}
      </div>
    </div>
  );
};

export default AddBlog;
