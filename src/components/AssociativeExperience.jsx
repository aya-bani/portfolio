import React from 'react';
import ExperienceCard from './ExperienceCard';
import { associativeExperienceData } from '../data'; // Ensure the correct import

const AssociativeExperience = () => {
  return (
<div className='bg-[#11071F] flex flex-col items-center pt-10'>
  <div>
    <h2 className="text-3xl font-bold text-white mb-4 font-preahvihear">Associative Experience</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
    {associativeExperienceData.map((experience, index) => (
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

export default AssociativeExperience; // Correct the export statement
