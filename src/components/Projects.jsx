import React from 'react';
import Amazon from '../assets/Amazon.png';
import Wether from '../assets/Wether.png';
import Image_Search from '../assets/Image_Search.png';
import Card from './Card';

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
              live: "https://youtube-clone-93300.netlify.app/",
              github: "https://github.com/rohitsingh93300/YouTube-clone"
            },
          ];

    return (
      
        <section id='projects' className='relative  py-10 px-4 bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]'>
          <div className='mb-16 max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-9'>
                {projectJson.map((items)=> {
                    return <Card item={items}/>
                })}
            </div>
          </div>
        </section>
        
      )
}

export default Projects;
