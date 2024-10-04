import React from 'react';
import { ProjectData } from '../data'; 
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className='h-1/2 sm:h-3/4 lg:h-1/2 bg-[#11071F] flex flex-col items-center justify-center pt-10 text-white mt-8'>
        <div>
              <h2 className="text-3xl font-bold text-white mb-4 font-preahvihear">Examples of My Projects</h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index} 
              title={project.title}
              description={project.description}
              defaultImg={project.defaultImg} 
              hoverImg={project.hoverImg}
            />
          ))}
        </div>
    </section>
  );
}

export default Projects;
