import React, { useState, useEffect } from "react";
import ProjectBack from './assets/images/project-2.png';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';
import projectData from './assets/project.json'; // Import project data

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Set project data from imported JSON
    setProjectsData(projectData);
  }, []);

  return (
    <div className="relative w-full py-4" id="projects">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover blur"
        style={{ backgroundImage: `url(${ProjectBack})` }}
      />
      {/* Content */}
      <div className="relative flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white py-10">Projects</h1>
          {/* Project cards */}
          <div className="flex justify-around flex-wrap text-wrap gap-12 p-8">
            {projectsData.map((project, index) => (
              <div key={index} className="project-container w-60">
                <img
                  src={`${project.image}`}
                  alt={`Project ${index + 1}`}
                  className="object-fil rounded-lg h-40 hover:border-[0.3rem]"
                />
                <h2 className="text-xl font-bold mt-4 text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-100 ">{project.description}</p>
                <div className="flex justify-center mt-4">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-4">
                      <FaGithub className="mr-2" /> GitHub
                    </button>
                  </a>
                  <a href={project.knowMore} target="_blank" rel="noreferrer">
                    <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                      <FaInfoCircle className="mr-2" /> Know More
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
