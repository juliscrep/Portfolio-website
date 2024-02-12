'use client';

import React, {useState} from 'react';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  
    const [message,setMessage] = useState('')
    const handleSubmit = async(event) => {
     event.preventDefault()
     const data = new FormData(event.target)
     const response = await fetch(event.target.action,{
       method: 'POST',
       body: data,
       headers:{Accept:'application/json'}
     })
   
     const result = await response.json()
     if(!response.ok){
       setMessage(result.errors.map(error => error.message).join(','))
       return false
     }
   
     setMessage("Email sent successfully!")
     event.target.reset();
   
   }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-4 gap-4 relative' id="contact">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 hidden md:block"></div>
        <div >
            <h5 className="text-xl font-bold text-white my-2 mt-14">
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md text-justify'>
                I&apos;m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/juliscrep">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/julieta-screpnik/">
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>

            </div>
        </div>
        <div>
            <form className='flex flex-col mt-16' id='form' action="https://formspree.io/f/xayrezyr" method="POST" onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2 text-sm font-medium '>Email</label>
                    <input type='email' 
                    id="email" required name="email"
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='your email'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium '>Subject</label>
                    <input type='text' 
                    id="subject" required name="subject"
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='subject'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
                    <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                     placeholder="Let's talk about..."/>                    
                </div>
                <button type='submit' className='bg-primary-500 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Submit</button>
                
                {
                    message && 
                    <p className='text-green-500 text-center text-lg mt-8 font-bold'>{message}</p>
                }
                 
            </form>
        </div> 
    </section>
  )
}

export default EmailSection;