import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'

const About = () => {
    return (
      
            <div className='relative' id='about'>
                <div className='py-12'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='text-center'>
                            <h2 className=' mt-1 text-base text-[#00ffee] font-semibold tracking-wide uppercase'>About Me</h2>
                            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Arjun Joshi</p>
                            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                                A Full-Stack Developer with expertise in the MERN stack.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                                <div>
                                    <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                    <p className='mt-4 text-lg text-gray-600'>
                                        I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I am always eager to learn new technologies and frameworks to enhance my skills and build innovative solutions.
                                    </p>
                                    <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                                </div>
                                <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-black  bg-zinc-800 text-white'>
                                    <h3 className='text-2xl font-semibold text-[#00ffee]'>Skills & Expertise</h3>
                                    <div className='flex items-center justify-center flex-wrap gap-3'>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Html} alt="" className='w-10' />
                                            <span className='font-semibold'>HTML</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Css} alt="" className='w-8' />
                                            <span className='font-semibold'>CSS</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Javascript} alt="" className='w-10' />
                                            <span className='font-semibold'>Javascript</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                            <span className='font-semibold'>React</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={ReduxLogo} alt="" className='w-8' />
                                            <span className='font-semibold'>Redux</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                            <span className='font-semibold'>Tailwind Css</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Bootstrap} alt="" className='w-10' />
                                            <span className='font-semibold'>Bootstrap</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={NodeLogo} alt="" className='w-10' />
                                            <span className='font-semibold'>Node Js</span>
                                        </div>
                                        <div className='border border-black flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Mongodb} alt="" className='w-10' />
                                            <span className='font-semibold'>Mongodb</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#00ffee]'>
                                            <img src={Express} alt="" className='w-10' />
                                            <span className='font-semibold'>Express Js</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                            <p className='mt-4 text-lg text-gray-600'>
                                I am an aspiring software developer with a strong foundation in programming languages such as C, C++, Java, and JavaScript. I have hands-on experience in full-stack web development using HTML, CSS, Node.js, and Express.js, along with knowledge of MongoDB and MySQL. Passionate about solving complex problems and contributing to impactful projects, I have worked on innovative applications like a Weather WebApp, an Image Search WebApp, and a Tweet Sentiment Analysis tool. I constantly strive to learn new technologies and keep up with the latest trends in the tech industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
            )
}

            export default About
