"use client";

import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Github, Gitlab and Tortoise SVN</li>
                <li>Programming languages: C#, C++, vb.net, Java, Python and Node.js</li>
                <li>Front End technologies: HTML, CSS, JavaScript and Next.js</li>
                <li>Postman and SoapUI</li>
                <li>Database: SQL, PL/SQL, MySql and MongoDB</li>
                <li>Azure DevOps</li>
                <li>Confluence and Jira</li>
                <li>Selenium IDE</li>
                <li>Control M</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Master's degree, Software Engineering (2023 - 2025) - Facultad de Informática within Universidad Nacional de La Plata </li>
                <li>Systems Engineering Degree, Information Systems Engineering (2016 - 2022) - Universidad Tecnológica Nacional</li>
                <li>Computer Engineering Degree, Computer Engineering (2013 - 2015) - UNC Facultad de ciencias exactas,fisicas y naturales</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Exploring Service APIs through TestAutomation </li>
                <li>API Test Automation with Postman</li>
            </ul>
        )
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
           <Image src='/images/about-image.png' width={500} height={500} alt='about image'/>
           <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg text-justify'>
              Hello, I'm a Systems Engineer. Currently, I'm pursuing a Master's Degree in Software 
              Engineering at the Universidad Nacional de La Plata (National University of La Plata).
              All my work experience, along with the knowledge I've acquired at the University, and 
              the conferences I've attended, allow me to be open-minded to embrace change and to be 
              strategic and analytical when it comes to problem-solving. I'm a perfectionist, 
              hardworking, and creative person who never gives up on finding the best version of 
              their projects. I'm also enthusiastic and positive, and I enjoy working as part of a 
              team as well as individually.
            </p>
            <div className='flex flex-row justify-start mt-8'>
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                  <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id=== tab).content}</div>
           </div>
        </div>
    </section>
  )
}

export default AboutSection