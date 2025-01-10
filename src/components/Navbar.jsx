import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'


const Navbar = () => {
const [MobileMenu,setmMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full  px-3 lg:px-0 text-[#00ffee] border-b-2 border-neutral-950 bg-transparent bg-gradient-to-t from-neutral-950 to-neutral-900
    backdrop-blur-3xl'>
      <div className='mx-auto max-w-7xl flex h-14 items-center'>
        <div className='flex justify-between w-full md:mr-4'>
          <a href="#" className='flex items-center space-x-2 mr-6'>
            <img src={Logo} alt="" className='w-32' />
          </a>
          <nav className='md:flex items-center space-x-6 text-lg hidden font-medium'>
              <a href="#home " className='transition-colors hover:text-foreground/80 text-foreground/60 hover:text-indigo-300'>Home</a>
              <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60 hover:text-indigo-300'>About</a>
              <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60 hover:text-indigo-300'>Project</a>
              <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60 hover:text-indigo-300'>Contact</a>
          </nav>
        </div>
        <button className='md:hidden inline-flex items-center justify-center rounded-md ' onClick={()=>setmMobileMenuOpen(!MobileMenu)}>
        <span className='sr-only'>Open main menu</span>
          {MobileMenu ? (
           <X className='h-6 w-6' aria-hidden="true"/>
          ):(
            <Menu className='h-6 w-6' aria-hidden="true"/>
        )
        }
        </button>
      </div>
      {MobileMenu && (
        <div className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <a href="#home" className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:opacity-5 hover:text-black hover:text-lg'>Home</a>
                <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:opacity-5 hover:text-black hover:text-lg'>About</a>
                <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:opacity-5 hover:text-black hover:text-lg'>Project</a>
                <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:opacity-5 hover:text-black hover:text-lg'>Contact</a>
            </div>
        </div>
      )}
    </header> 
  );
}

export default Navbar;
