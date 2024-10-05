import React from 'react'

const Footer = () => {
  return (

    <div className='flex flex-col  bg-black text-white gap-4'>
      <div className='bg-black flex flex-row   justify-around font-playfair text-lg'>
        <div className='text-white flex flex-col justify-center items-center'>
          <img className='h-32 cursor-pointer' src='https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM='></img>
          <p className='text-2xl font-bold font-playfair cursor-pointer'>
            FITNESS & FREAK
          </p>
        </div>

         {/* list items */}
        <div className='flex flex-col text-white justify-around gap-3  '>
           <ul className='flex flex-col gap-3 cursor-pointer'>
          <li href="#" className='hover:text-fuchsia-400'>Home</li>
          <li href="#" className='hover:text-fuchsia-400'>About me</li>
          <li href="#" className='hover:text-fuchsia-400'>Work with me</li>
          <li href="#" className='hover:text-fuchsia-400'>As Featured In</li>
          <li href="#" className='hover:text-fuchsia-400'>Instagram</li>
          <li href="#" className='hover:text-fuchsia-400'>Contact</li>
          </ul>
        </div>

        {/* right last footer */}
        <div className='flex flex-col text-white font-serif justify-evenly '>
          <div className='w-[60%]'>
            Subscribe here and get the latest travel tips  and my insider secrets!
          </div>
          <div className='flex flex-col justify-between gap-2'>
            <div>
              <h1>Email*</h1>
              <input type="email" placeholder='Email' className='  decoration-white placeholder:Email  text-black ' />
            </div>
            <div className='flex flex-row  justify-between '>
              <div className='flex '>
                <input type="checkbox" name="" id="" />
                <p>Get latest updates on NewsLetter regularly</p>
              </div>
              <div>
                <button className='rounded-md bg-white text-black hover:bg-blue-900 hover:text-white w-32'>SUBSCRIBE</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
