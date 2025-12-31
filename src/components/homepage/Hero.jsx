import React from 'react';
import { FaBookBible } from 'react-icons/fa6';
import { IoBookOutline } from 'react-icons/io5';
import { MdMenuBook } from 'react-icons/md';
import { SlMagicWand } from 'react-icons/sl';
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #1F3A2B 0%, rgba(31, 58, 43, 0.8) 50%, #FFE87C 100%)',
        width: '100%',
     
      }}
    >
<div className='p-28 px-36'>
<div className='flex justify-between'>
        <div className='flex items-center gap-4'>
    <p className='bg-white p-2 rounded-xl'> <IoBookOutline  size={33} />
    
    </p>
    <p className='text-[30px] font-semibold text-white'>StoryTime</p>
</div>
<div className='flex gap-6'>
    <button onClick={()=> navigate('/login')} className='bg-white px-8 font-semibold rounded-3xl'>Sign In</button>
    <button 
    onClick={()=> navigate('/signup')}
    style={{
        background: 'linear-gradient(90deg, #FFB6C1 0.13%, #FFE87C 100.19%)'

    }}
    className='bg-white px-9 font-semibold rounded-3xl'>Sign Up Free</button>
  
</div>
</div>
<div className='mt-5 relative'>
    <p className='text-[60px] font-semibold flex justify-center items-center gap-5 text-white text-center'>Read, Write, and Explore <MdMenuBook /> <p className=" text-5xl animate-pulse">
  ✨
</p>
</p>
    <p className='text-center text-[24px] w-[40%] mx-auto text-white mt-3 font-thin'>
       Join thousands of young readers discovering magical stories and creating their own adventures!
    </p>

    <div className='flex justify-center items-center gap-3 mt-9'>
    {
        ["1000+ stories","story creator","earn badges","built in dictonary"].map(items => (
             <button className="bg-white/20 text-white px-5 border border-white/40 py-2 text-[18px] rounded-3xl">
  {items}
</button>
        ))
    }

    </div>
<p className="absolute left-1/4 text-5xl animate-pulse">
  ✨
</p>


    
    
</div>
</div>
    </div>
  );
};

export default Hero;
