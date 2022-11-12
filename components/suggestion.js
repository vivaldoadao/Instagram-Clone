import React from 'react';

function suggestion({src , name, caption}) {
  return (
    <div className='flex items-center justify-between mt-3'>
      <img className='h-10 w-10 rounded-full p-[2px]
          border-2 object-contain
          cursor-pointer hover:scale-110 transition
           transform duration-200 ease-out' src={src} alt=''/>

        <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm'>{name}</h2>
        <h3 className='text-xs text-gray-400'>{caption}</h3>


        </div>

        <button className='text-blue-400 text-xs font-bold'>Seguir</button>
        
    </div>
  );
}

export default suggestion;
