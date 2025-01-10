import React from 'react';
import Amazon from '../assets/Amazon.png';
import Wether from '../assets/Wether.png';
import Image_Search from '../assets/Image_Search.png';
import Cards from './Card';
import { Box } from '@mui/material';
import Calculator from '../assets/Calculator.png'

const Projects = () => {

  const projectJson = [
    {
      title: 'Amazon Clone',
      desc: ' Created an Amazon Web Clone with HTML, CSS, and JavaScript, replicating design and core features like product categories, shopping cart, and account management',
      image: Amazon,
      live: "https://arjun2461.github.io/Amezon-Web-Clone/",
      github: "https://github.com/Arjun2461/Amezon-Web-Clone"
    },
    {
      title: 'Wether App',
      desc: 'Developed a responsive weather app using HTML, CSS, and JavaScript, integrating a public API to provide real-time weather updates for user-specified locations.',
      image: Wether,
      live: "https://arjun2461.github.io/whether_App/",
      github: "https://github.com/Arjun2461/whether_App"
    },
    {
      title: 'Image Search',
      desc: ' Created a dynamic image search app with HTML, CSS, and JavaScript, integrating the Unsplash API to display high-quality images based on user input.',
      image: Image_Search,
      live: "https://arjun2461.github.io/Search_Image/",
      github: "https://github.com/Arjun2461/Search_Image"
    },
    {
      title: 'Calculator',
      desc: 'I created a fully responsive calculator using HTML5, CSS3, and JavaScript. It features a modern gradient background, glassmorphism design, and interactive UI with responsive layouts optimized for mobile and desktop.',
      image: Calculator,
      live: "https://arjun2461.github.io/Calculator/",
      github: "https://github.com/Arjun2461/Calculator"
    },
  ];

  return (
    <section id='projects' className='relative  py-10  font-Poppins' >
      <div className='mb-16 max-w-7xl mx-auto'>
        <Box className="bg-blue-600 px-3 lg:px-6 lg:py-2 rounded-r-full mt-10 lg:text-xl text-lg font-bold text-white shadow-md max-w-sm  text-center font-Poppins ">
          Projects
        </Box>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-9'>
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </section>

  )
}

export default Projects;
