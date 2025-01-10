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
import Java from '../assets/Java.svg'
import { Box} from '@mui/material';
import C from '../assets/C.png'
import Cpp from '../assets/C++.svg'

const About = () => {
   

    return (
      
            <div className='relative  font-Poppins md:pt-8 pt-4' id='about'>
                <div className='mx-auto'>
                        <Box className="bg-blue-600 px-3 lg:px-6 lg:py-2 rounded-r-full mt-10 lg:text-xl text-lg font-bold text-white shadow-md max-w-sm  text-center font-Poppins ">
                             About Me
                        </Box>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='text-center font-Poppins'>
                            <p className=' text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-Poppins mt-10'>Hi, I'm Arjun Joshi</p>
                            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-Poppins'>
                                A Full-Stack Developer with expertise in the MERN stack.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                                <div>
                                    <h3 className='text-2xl font-semibold text-gray-900 font-Poppins' >My Journey</h3>
                                    <p className='mt-4 text-lg text-gray-600 font-Poppins text-justify'>
                                        I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I am always eager to learn new technologies and frameworks to enhance my skills and build innovative solutions.
                                    </p>
                                    <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                                </div>
                                <div className='border border-blue-400 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-black    text-[#007fff]'>
                                    <h3 className='text-2xl font-semibold text-[#007fff] font-Poppins'>Skills & Expertise</h3>
                                    <div className='flex items-center justify-center flex-wrap gap-3'>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Html} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>HTML</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Css} alt="" className='w-8' />
                                            <span className='font-semibold font-Poppins'>CSS</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Javascript} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>Javascript</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                            <span className='font-semibold font-Poppins'>React</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={ReduxLogo} alt="" className='w-8' />
                                            <span className='font-semibold font-Poppins'>Redux</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                            <span className='font-semibold font-Poppins'>Tailwind Css</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Bootstrap} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>Bootstrap</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={NodeLogo} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>Node Js</span>
                                        </div>
                                        <div className='border border-black flex items-center  w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Mongodb} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>Mongodb</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Express} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>Express Js</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Java} alt="" className='w-10' />
                                            <span className='font-semibold font-Poppins'>Java</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={C} alt="" className='w-7' />
                                            <span className='font-semibold font-Poppins'>C</span>
                                        </div>
                                        <div className='border border-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md  '>
                                            <img src={Cpp} alt="" className='w-7' />
                                            <span className='font-semibold font-Poppins'> C++</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                            <p className='mt-4 text-lg text-gray-600'>
                            I am an aspiring Full-Stack Developer with strong skills in C, C++, Java, and JavaScript, combined with hands-on experience in web development using technologies like HTML, CSS, Node.js, and Express.js. My expertise extends to working with databases such as MongoDB and MySQL. Passionate about solving complex problems and continually learning, I strive to craft solutions that deliver value and impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default About
