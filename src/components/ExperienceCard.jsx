import React from 'react';

export default function ExperienceCard({ title, organization, duration, description, img }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center font-preahvihear p-4 m-2 rounded-md shadow-md h-auto sm:h-48 bg-gradient-to-r from-custom-purple-1 via-custom-purple-3 to-custom-purple-5 w-full max-w-sm sm:max-w-xl">
      <div className="mb-4 sm:mr-4 sm:mb-0  sm:w-48 sm:h-auto flex items-center justify-center">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full " 
        />
      </div>

      <div className="text-center sm:text-left">
    <h3 className="text-lg sm:text-xl font-bold text-white font-preahvihear break-words">{title}</h3>
    <p className="text-sm sm:text-base text-custom-purple font-preahvihear break-words">{organization}</p>
    <p className="text-xs sm:text-sm text-white font-preahvihear">{duration}</p>
    <p className="mt-2 text-xs sm:text-sm text-white font-preahvihear break-words">{description}</p>
  </div>
  </div>
  
  );
}
