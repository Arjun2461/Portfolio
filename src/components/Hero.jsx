import React from 'react';
import Hero1 from '../assets/Hero1.png';
import hero from '../assets/hero.png';

import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (

        <section  id='home' className='w-full  flex items-center justify-center text-white '>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ml-2' >
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
                        <h1 className='lg:text-6xl text-lg font-bold lg:leading-snug'>Hi There, <br />I'm  <TypeAnimation className='text-[#00ffee]'
                            sequence={[
                                'Arjun Joshi',
                                1000,
                                'a Web Developer',
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity} /></h1>
                        <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
                        <p className='mb-4'>I'm a passionate web developer with expertise in React, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
                        <button className='bg-[#00ffee]  text-gray-900 px-3 py-2 w-max rounded-md ease-in-out'><a href="" download target='_blank'>Download CV</a></button>
                    </div>
                    <div className='md:w-1/2 relative flex justify-center items-end'>
                        <img src={Hero1} alt="" className='lg:h-[80vh] h-85 shadow-lg hover:shadow-2xl lg:hover:h-[85vh] hover:shadow-[#00ffee] shadow-[#00ffee] transition-all duration-500 ease-in-out	rounded-xl' />
                        <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
                        <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden' />
                        <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden' />
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Hero;
