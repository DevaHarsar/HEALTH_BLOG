

const Footer = () => {
  return (

    <div className='w-screen flex flex-col  bg-black text-white py-5 max-sm:h-screen max-sm:w-screen'>

      <div className='bg-black flex flex-row  justify-evenly font-playfair text-lg max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-sm'>
        <div className='text-white flex flex-col justify-center items-center'>
          <img className='h-32 cursor-pointer rounded-full mb-3' src='https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM='></img>
          <p className='text-2xl font-bold font-sans cursor-pointer'>
             <span className="text-red-500">FITNESS</span> CLUB
          </p>
        </div>

         {/* list items */}
        <div className='flex flex-col text-white justify-center gap-3'>
           <ul className='flex flex-col gap-3 cursor-pointer'>
          <li href="#" className='hover:text-slate-400 font-serif'>Home</li>
          <li href="#" className='hover:text-slate-400 font-serif'>About me</li>
          <li href="#" className='hover:text-slate-400 font-serif'>Work with me</li>
          <li href="#" className='hover:text-slate-400 font-serif'>As Featured In</li> 
          <li href="#" className='hover:text-slate-400 font-serif'>Instagram</li>
          <li href="#" className='hover:text-slate-400 font-serif'>Contact</li>
          </ul>
        </div>

        {/* right last footer */}
        <div className='flex flex-col text-white font-sans justify-evenly max-sm:flex max-sm:flex-col max-sm:justify-around max-sm:items-center '>
          <div className='w-[60%]   max-sm:flex max-sm:flex-col max-sm:justify-around max-sm:items-center'>
            Subscribe here and get the latest Health tips  and Healthy Life Secrets!
          </div>
          <div className='flex flex-col justify-between gap-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-0'>
            <div>
              <h1>Email*</h1>
              <input type="email" placeholder='Email' className='mt-1 px-2 decoration-white placeholder:Email  text-black ' />
            </div>
            <div className='flex flex-row  justify-between mt-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
              <div className='flex '>
                <input type="checkbox" name="" id="" className="mr-2" />
                <p>Get latest updates on NewsLetter regularly</p>
              </div>
              <div>
                <button className='rounded-md bg-white text-black hover:bg-slate-400 hover:text-white w-32 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>SUBSCRIBE</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
