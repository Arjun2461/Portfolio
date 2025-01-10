import React from 'react';
import Github from '../assets/Github.png';

const Card = ({ item }) => {
    return (
           <div className=' border-2 border-[#00ffdd] hover:border-3  hover:border-black  rounded-lg w-[350px] lg:w-[380px] bg-red-50  hover:w-[400px]  hover:shadow-xl  hover:shadow-[#00ffee] transition-all duration-300'>
               <img src={item.image} alt="" className='rounded-lg' />
               <div className='p-4'>
                   <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                   <p>{item.desc}</p>
                   <div className='flex gap-3 mt-4'>
                       <button className='bg-[#00fffffd] shadow-md shadow-black text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Live Preview</a></button>
                       <button className='bg-black text-white px-3 py-2 rounded-md'>
                           <a href={item.github} target='_blank' className='flex gap-1'>
                               <img src={Github} alt="" className='w-6'/>
                               Github Link
                           </a>
                       </button>
                   </div>
               </div>
           </div>
       )
}

export default Card;
