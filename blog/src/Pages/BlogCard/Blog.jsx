import React, { useEffect, useState } from 'react';
import Card from '../../Components/Recent_Post/Athu';

const Blog = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3333');
      const data = await res.json();
      setItems(data.items);
    };
    fetchData();
  }, []);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); 
  };

  return (
    <>
      <div className='mt-52'>
        {/* Page Title */}
        <h1 className='primary_text text-[36px] px-14 max-sm:p-0 max-sm:text-[22px] max-sm:pl-9'>
          Recent Blogs
        </h1>

        {/* Cards Section */}
        <div className='w-full flex justify-center items-start px-14 max-sm:w-full max-sm:p-4 '>
          <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 lg:grid-rows-2'>
            {items.slice(0, visibleItems).map((post, index) => (
              <Card key={index} image={post.imageURL} title={post.description} />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className='flex justify-center mt-20 mb-10'>
          {visibleItems < items.length && (
            <button
              className='px-6 py-2 bg-[#b8953d] text-white rounded-lg hover:bg-[#b88b00] transition duration-300'
              onClick={handleViewMore}
            >
              View More Posts
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
