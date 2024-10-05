import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>
    {/* Logo Part */}
    <div className='w-screen py-5 bg-black text-white flex justify-between items-center px-6 drop-shadow'>

      <div className='flex items-center gap-3 px-16'>
        <div className='w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 font-medium text-slate-950'>
            <img className='rounded-full h-full' src='https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM='></img>
        </div>

            <div>
                <p className='text-2xl font-bold font-playfair cursor-pointer'>
                    FITNESS & FREAK
                </p>
                <p className = 'text-white text-xl font-serif'>
                    <span className='pr-1'>B</span>
                    <span className='pr-1'>l</span>
                    <span className='pr-1'>o</span>
                    <span className='pr-1'>g</span>
                    <span>s</span>
                </p>
            </div>
      </div>

        {/* SearchBar Part */}
        <div className='w-80 bg-slate-100 flex items-center px-4  bg-transparent border-2 border-white'>
        <input
            type='text'
            placeholder='Search...'
            className='w-full text-xs text-white bg-transparent py-[11px] outline-none font-serif' 
        />
            <FaMagnifyingGlass className = 'text-slate-400 cursor-pointer hover:text-white' />

        </div>

        {/* List Part */}
        <div className='px-6'>
        <ul className='flex items-center gap-10 font-serif text-[20px]'>
            <li className='hover:text-slate-400 hover:underline cursor-pointer'>Home</li>
            <li className='hover:text-slate-400 hover:underline cursor-pointer'>Blog</li>
            <li className='hover:text-slate-400 hover:underline cursor-pointer'>About</li>
            <li className='hover:text-slate-400 hover:underline cursor-pointer'>Contact</li>
        </ul>
        </div>

    </div>
    </>
  )
}

export default Navbar
