import React from 'react';
import ExperienceCard from './ExperienceCard';
import { workExperienceData } from '../data'; // Ensure the correct import

const WorkExperience = () => {
  return (
<div className='h-1/2 sm:h-3/4 lg:h-1/2 bg-[#11071F] flex flex-col items-center justify-center pt-10'>
<div>
    <h2 className="text-3xl font-bold text-white mb-4 font-preahvihear">Professional Experience</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
    {workExperienceData.map((experience, index) => (
      <ExperienceCard
        key={index} 
        title={experience.title}
        organization={experience.organization}
        duration={experience.duration}
        description={experience.description}
        img={experience.img} 
      />
    ))}
  </div>
</div>

  );
};

export default WorkExperience; // Correct the export statement
