import { useState } from 'react';
import AddBlog from '../../Components/AddBlog';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Display AddBlog Component if visible */}
      {visible && <AddBlog handleClose={handleVisible} />}

      {/* Navbar Section */}
      <div className='w-screen py-5 bg-black text-white flex justify-between items-center px-6 drop-shadow max-sm:py-3'>
        {/* Logo Part */}
        <div className='flex items-center gap-3 px-16 max-sm:px-8'>
          <div className='w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 font-medium text-slate-950 max-sm:h-12 max-sm:w-16'>
            <img
              className='rounded-full h-full'
              src='https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM='
              alt='Fitness Logo'
            />
          </div>
          <div>
            <p className='text-2xl font-bold font-sans cursor-pointer max-sm:text-base'>
              <span className='text-red-500 max-sm:text-base'>FITNESS</span> CLUB
            </p>
            <p className='text-white text-xl font-serif max-sm:text-xs'>
              <span className='pr-1'>B</span>
              <span className='pr-1'>l</span>
              <span className='pr-1'>o</span>
              <span className='pr-1'>g</span>
              <span>s</span>
            </p>
          </div>
        </div>

        {/* List Part */}
        <div className='px-6 max-sm:hidden'>
          <ul className='flex items-center gap-10 font-serif text-[20px]'>
            <li
              className='hover:text-slate-400 hover:underline cursor-pointer'
              onClick={() => handleScroll('home')}
            >
              Home
            </li>
            <li
              className='hover:text-slate-400 hover:underline cursor-pointer'
              onClick={() => handleScroll('blog')}
            >
              Blog
            </li>
            <li
              className='hover:text-slate-400 hover:underline cursor-pointer'
              onClick={handleVisible}
            >
              Add Blogs
            </li>
            <li
              className='hover:text-slate-400 hover:underline cursor-pointer'
              onClick={() => handleScroll('contact')}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
