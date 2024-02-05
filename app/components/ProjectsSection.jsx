"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id:1,
        title: "North Winds Website",
        description:"This project consists of a website for a company called North Winds that provides services to wind parks. I used HTML, CSS, JavaScript, and Next.js. It was deployed on Vercel. Desktop and mobile version.",
        image: "/images/projects/northwinds.png",
        tag: ["All","Web"],
        gitUrl:"/", 
        previewUrl:"/",
    },
    {
        id:2,
        title: "web service (API) to diagnose a patient's cardiac risk",
        description:"This project presents the proposed solution for the integrative project in the course 'Topics in Software Engineering II' within the Master's Degree in Software program. The proposal involves the development of a web service (API) that provides access to a neural network model.The main goal of this model is to diagnose the cardiac risk of a patient based on provided clinical data, such as cholesterol level, blood pressure, blood sugar level, age, overweight status, and smoking habit.The logical system model is based on a microservices architecture using Python and MongoDB.",
        image: "/images/projects/patientsCardiacRisk.png",
        tag: ["All","Academic"],
        gitUrl:"/", 
        previewUrl:"/",
    },
    {
        id:3,
        title: "Blockchain Simulation",
        description:"In this project, the proposed solution for the integrative project of the course 'Software Techniques and Tools' in the Master's Degree in Software program. The proposal involves the development of a blockchain using Node.js.",
        image: "/images/projects/blockchain.png",
        tag: ["All","Academic"],
        gitUrl:"/", 
        previewUrl:"/",
    },
    {
        id:4,
        title: "Artic App",
        description:"In this project, I tested the 'Artic' mobile application. The application was designed to enhance the visitor experience by providing detailed information about exhibitions, event schedules, and activities that users could register for. Additionally, it allowed users to explore multimedia content related to works of art",
        image: "/images/projects/artic.png",
        tag: ["All","Testing"],
        gitUrl:"/", 
        previewUrl:"/",
    },

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <><h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
         My Projects
       </h2>
       <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
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
    <div>{filteredProjects.map((project) => 
       <ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description} 
         imgUrl={project.image}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}
        />)}</div></>
  )
}

export default ProjectsSection