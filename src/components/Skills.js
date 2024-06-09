import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaCss3, FaJs, FaReact, FaPhp, FaNodeJs, FaDatabase, FaWordpress } from 'react-icons/fa';
import skillSet from "./assets/skillSet.json";
import skillBack from './assets/images/skills-1.png';

const Skills = () => {
  // Define an object to map skill names to their respective icons
  const skillIcons = {
    'HTML': FaHtml5,
    'CSS': FaCss3Alt,
    'BOOTSTRAP': FaBootstrap,
    'TAILWIND CSS': FaCss3,
    'JAVASCRIPT': FaJs,
    'REACT': FaReact,
    'PHP': FaPhp,
    'NODE': FaNodeJs,
    'MYSQL': FaDatabase,
    'MONGODB': FaDatabase,
    'WORDPRESS': FaWordpress
  };

  return (
    <div className="relative" id="skills">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center blur" style={{ backgroundImage: `url(${skillBack})` }} />

      {/* Skills */}
      <div className="relative p-8 rounded-lg shadow-lg dark:bg-gray-100">
        <div className="text-center mb-5">
          <h1 className="text-2xl font-medium text-gray-100 dark:text-white">Skills</h1>
        </div>
        <div className="gap-8 sm:grid sm:grid-cols-2 p-8">
          {skillSet.map((skill, index) => (
            <div key={index}>
              <dl>
                <dt className="text-sm font-medium text-white dark:text-white flex items-center mb-3">
                  {React.createElement(skillIcons[skill.skill], { className: "mr-2" })}
                  {skill.skill}
                </dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray0-0-0-0-90-500 me-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: `${skill.percentage}%`, backgroundColor: `${skill.color}` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-100 dark:text-gray-100">{skill.percentage}</span>
                </dd>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
