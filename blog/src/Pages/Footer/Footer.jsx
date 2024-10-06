

const Footer = () => {
  return (

    <div className='flex flex-col  bg-black text-white py-5'>

      <div className='bg-black flex flex-row  justify-evenly font-playfair text-lg '>
        <div className='text-white flex flex-col justify-center items-center'>
          <img className='h-32 cursor-pointer rounded-full mb-3' src='https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM='></img>
          <p className='text-2xl font-bold font-playfair cursor-pointer'>
            FITNESS & FREAK
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
        <div className='flex flex-col text-white font-sans justify-evenly '>
          <div className='w-[60%] '>
            Subscribe here and get the latest travel tips  and my insider secrets!
          </div>
          <div className='flex flex-col justify-between gap-2'>
            <div>
              <h1>Email*</h1>
              <input type="email" placeholder='Email' className='mt-1  decoration-white placeholder:Email  text-black ' />
            </div>
            <div className='flex flex-row  justify-between mt-2'>
              <div className='flex '>
                <input type="checkbox" name="" id="" className="mr-2" />
                <p>Get latest updates on NewsLetter regularly</p>
              </div>
              <div>
                <button className='rounded-md bg-white text-black hover:bg-slate-400 hover:text-white w-32'>SUBSCRIBE</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
