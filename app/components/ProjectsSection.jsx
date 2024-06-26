"use client";

import React, { useState, useRef  } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id:1,
        title: "North Winds Website",
        description:"This project consists of a website for a company called North Winds that provides services to wind parks. I used HTML, CSS, JavaScript, and Next.js. It was deployed on Vercel. Desktop and mobile version.",
        image: "/images/projects/northwinds.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/juliscrep/North-Winds-Project-", 
        previewUrl:"https://northwinds.vercel.app/",
    },
    {
      id:2,
      title: "Todo List",
      description:"This project is a website for a todo list, developed using Vite, TypeScript, React, Tailwind CSS, and Firebase. It has been deployed on Vercel. Desktop and mobile version.",
      image: "/images/projects/toolAI.png",
      tag: ["All","Web"],
      gitUrl:"https://github.com/juliscrep/Todo-list-full-stack", 
      previewUrl:"https://todo-list-full-stack-project.vercel.app/",
  },
    {
        id:3,
        title: "web service (API) to diagnose a patient's cardiac risk",
        description:"This project develops a web service (API) granting access to a neural network model. Its primary aim is to diagnose a patient's cardiac risk using clinical data. The system adopts a microservices architecture with Python and MongoDB.",
        image: "/images/projects/patientsCardiacRisk.png",
        tag: ["All","Academic"],
        gitUrl:"https://github.com/juliscrep/API-to-diagnose-a-patient-s-cardiac-risk.git", 
        previewUrl:"https://github.com/juliscrep/API-to-diagnose-a-patient-s-cardiac-risk.git",
    },
    {
        id:4,
        title: "Blockchain Simulation",
        description:"In this project, the proposed solution for the integrative project of the course 'Software Techniques and Tools' in the Master's Degree in Software program. The proposal involves the development of a blockchain using Node.js.",
        image: "/images/projects/blockchain.png",
        tag: ["All","Academic"],
        gitUrl:"https://github.com/juliscrep/Blockchain-Simulation.git", 
        previewUrl:"https://github.com/juliscrep/Blockchain-Simulation.git",
    },
    {
        id:5,
        title: "Artic App",
        description:"In this project, I tested the 'Artic' mobile application. The application was designed to enhance the visitor experience by providing detailed information about exhibitions, event schedules, and activities that users could register for. Additionally, it allowed users to explore multimedia content related to works of art",
        image: "/images/projects/artic.png",
        tag: ["All","Testing"],
        gitUrl:"https://drive.google.com/drive/folders/1e2NSdVyXH28ixfqq8AwI8WlvHML9ztp8?usp=drive_link", 
        previewUrl:"https://drive.google.com/drive/folders/1e2NSdVyXH28ixfqq8AwI8WlvHML9ztp8?usp=drive_link",
    },
    {
      id:6,
      title:"Swag Labs",
      description:"In this project, I tested the 'Swag Labs' web application using selenium with java.The application is designed as an online shopping platform with a shopping cart functionality.",
      image:"/images/projects/saucedemoTest.png",
      tag: ["All","Testing"],
      gitUrl:"https://github.com/juliscrep/saucedemoTest.git",
      previewUrl:"https://github.com/juliscrep/saucedemoTest.git",
    },
    {
      id:7,
      title:"IMDb clone website",
      description:"This project is an IMDb clone website developed using Next.js and Tailwind CSS. It has been deployed on Vercel and includes versions for both desktop and mobile.",
      image:"/images/projects/imdbclone.png",
      tag: ["All","Web"],
      gitUrl:"https://github.com/juliscrep/IMDb-clone.git",
      previewUrl:"https://imdb-clone-app-movie.vercel.app/",

    },

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <><section id="projects">
       <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
         My Projects
       </h2>
       <div className='text-white flex flex-wrap justify-center items-center gap-2 py-6 '>
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} 
           />
           <ProjectTag 
            onClick={handleTagChange} 
            name="Academic" 
            isSelected={tag === "Academic"} 
           />
           <ProjectTag 
            onClick={handleTagChange} 
            name="Testing" 
            isSelected={tag === "Testing"} 
           />
           <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"} 
           />

        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
     </section></>
  )
}

export default ProjectsSection;