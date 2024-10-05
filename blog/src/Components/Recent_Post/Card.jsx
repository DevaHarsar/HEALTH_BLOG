import React from 'react';
import { inbox } from '../../assets';

const Card = ({ image, title }) => {
  return (
    <div className='w-[270px] h-[360px] border max-sm:w-[330px] max-sm:h-[350px]'>
      {/* Image Section */}
      <div className='w-full h-[200px]'>
        <img 
          src={image} 
          alt="Culinary Journey" 
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content Section */}
      <div className='p-7 pt-4 flex flex-col h-20'>
        <a href="#" className='cursor-pointer'>
          <h1 className='primary_text text-black font-medium text-[24px] font-semibold opacity-80 hover:text-[#d59900] overflow-hidden whitespace-nowrap text-ellipsis'>
            {title}
          </h1>
        </a>    

        <div className='mt-auto'> 
          <p className='opacity-10 p-0 m-0'>___________________________________</p>

          {/* Inbox Icon */}
          <img
            src={inbox}
            alt="Inbox"
            width={25}
            height={20}
            className='object-contain cursor-pointer pt-1 hover:brightness-150 transition duration-200'
            onClick={() => console.log('touched')}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
