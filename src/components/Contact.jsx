import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'
import { Box } from '@mui/material'
import Call from '../assets/Call.svg'
import Email from '../assets/Email.svg'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_cry82wd';
    const templateId = 'template_jv11wil';
    const publicKey = 'Sibiwy38Yo4iriLKz';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Arjun Joshi',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        setStatus('Failed to send email. Please try again.');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
      });
  }



  return (
    <section id='contact' className='z-50 bg-white font-Poppins  relative  md:pt-8 pt-4 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <Box className="bg-blue-600 px-3 lg:px-6 lg:py-2 rounded-r-full mt-10 lg:text-xl text-lg font-bold text-white shadow-md max-w-sm  text-center font-Poppins ">
          Contact
        </Box>
        <div className='flex flex-col md:flex-row justify-between items-start mt-10'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <p className='m-4 text-black text-justify tracking-wider'>Ready to Bring Your Ideas to Life?
              <br /> As I begin my journey in front-end development, I'm eager to help create modern, responsive, and visually appealing websites tailored to your needs. With a strong foundation in JavaScript, ReactJS, and the MERN stack, I am ready to turn your vision into a reality. Let's collaborate and build something exceptional!
            </p>
            <p className='m-4'>
              <img src={Call} alt="" className='h-6 w-6 inline-block' /><span> +91 9766539158</span>
              <br />
              <img src={Email} alt="" className='h-6 w-6 inline-block' /><span> arjunjoshi1610@gmail.com</span>
            </p>
            <div className='flex space-x-4'>
              <a href="https://www.facebook.com/share/1FvcefU7nM/" className='text-foreground/60 hover:text-foreground/80' target='_blank'>
                <img src={facebook} alt="" className='h-9 w-9 ml-4' /></a>
              <a href="https://www.instagram.com/_arjun__joshi?utm_source=qr&igsh=MXJ0YjU4MHV5dGI1cw==" className='text-foreground/60 hover:text-foreground/80' target='_blank'>
                <img src={instagram} alt="" className='h-9 w-9 ml-4' /></a>
              <a href="https://www.linkedin.com/in/arjun-joshi-70532b235/" className='text-foreground/60 hover:text-foreground/80' target='_blank'>
                <img src={linkedin} alt="" className='h-9 w-9 ml-4' /></a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form 
            onSubmit={handleSubmit}
            className='w-full md:w-1/3 bg-gray-100 rounded-lg border hover:border-blue-600 shadow-blue-600 shadow-lg 
                transition-all duration-300 ease-in-out p-10 mr-10'>
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>

            {status && (
              <div className={`mb-4 p-3 rounded-md text-center ${
                status.includes('success') 
                  ? 'bg-green-100 text-green-700 border border-green-400' 
                  : 'bg-red-100 text-red-700 border border-red-400'
              }`}>
                {status}
              </div>
            )}

            <div className='mb-4'>
              <label htmlFor="user_name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type="text"
                name="user_name"
                id='user_name'
                required
                value={name}
                placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="user_email" className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email"
                name="user_email"
                id='user_email'
                value={ email }
                required
                placeholder='Email'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                name="message"
                id='message'
                value={message}
                required
                placeholder='Enter Your Message'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className='bg-[#007fff] text-white px-3 py-2 rounded-lg shadow-md shadow-black'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
