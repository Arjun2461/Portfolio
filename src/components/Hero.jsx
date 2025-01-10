import React from 'react';
import Hero1 from '../assets/Hero1.png';
import hero from '../assets/hero.png';
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';
import { TypeAnimation } from 'react-type-animation';
import { Stack ,Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Hero = () => {
    return (

        <section id='home' className='w-full  flex items-center justify-center font-Poppins leading-6 tracking-wider md:pt-8 pt-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ml-2' >
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-5 lg:px-4 lg:mt-0 mt-10'>
                        <h1 className='lg:text-5xl text-lg font-bold lg:leading-snug'>Hi There, <br />I'm <TypeAnimation className='text-[#007fff] lg:text-5xl font-bold'
                            sequence={[
                                'Arjun Joshi',
                                1000,
                                'a Web Developer',
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity} /></h1>
                        <p className='mb-4 text-justify '>I'm a passionate web developer with expertise in React, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
                        <button className='text-[#007fff] border-2 border-[#007fff] font-Poppins px-3 py-2 w-max rounded-md '><a href="https://drive.google.com/file/d/1JJ2RxyBX62TsrewTTl4qkeySG5Cvigus/view?usp=sharing" download target='_blank'>Download CV</a></button>
                        <Stack direction="row" spacing={3} className='mt-4' >
                            <a target="_blank" rel='noreferrer' href='https://github.com/Arjun2461'><Chip label="GitHub" icon={<GitHubIcon fontSize="small" />} onClick={() => { }} /></a>
                            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/arjun-joshi-70532b235/'><Chip label="LinkedIn" icon={<LinkedInIcon />} onClick={() => { }} /></a>
                            <a target="_blank" rel='noreferrer' href='#'><Chip label="Email" icon={<AlternateEmailIcon fontSize="small" />} onClick={() => { }} /></a>
                        </Stack>
                    </div>

                    <div className='md:w-1/2 relative flex justify-center items-end'>
                        <img src={Hero1} alt="" className='lg:h-[90vh] h-96' />
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Hero;
