// import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../../Components/Recent_Post/Athu'
import { image1, image2, image3, image4, image5, image6 } from '../../assets'




const Blog = () => {

  const [items , setItems] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3333')
      const data = await res.json()
      setItems(data.items)

    }
    fetchData()
  } , [])
  
  return (
    <>  
      <div className='mt-52'>
      {/* {items.map((item,index) => {
        console.log(item.title)
        console.log(item.description)
      })} */}
        {/* Page Title */}
        <h1 className='primary_text text-[36px] px-14 max-sm:p-0 max-sm:text-[22px] max-sm:pl-9'>
          Recent Blogs 
        </h1>

        {/* Cards Section */}
        <div className='w-full flex justify-center items-start px-14 max-sm:w-full max-sm:p-4'>
          <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 xl:grid-rows-2 lg:grid-rows-2'>
        {/* < Athu/> */}
            <Card image={image1} title="Push yourself" /> 
            <Card image={image2} title="Fitness is not a destination" />
            <Card image={image3} title="Stronger every day" />
            <Card image={image4} title="Sweat now" />
            <Card image={image5} title="Don’t stop until" />
            <Card image={image6} title="Your only limit" />
            <Card image={image6} title="Your only limit" />
            <Card image={image6} title="Your only limit" />

          </div>
        </div>

        {/* Footer Section */}
        <div className='flex justify-center mt-20 mb-10'>
          <button className='px-6 py-2 bg-[#b8953d] text-white rounded-lg hover:bg-[#b88b00] transition duration-300'
          >
            View More Posts
          </button>
        </div>
      </div>
    </>
  )
}

export default Blog
