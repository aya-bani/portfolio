import React , { useState } from 'react'
import { ImageContainer } from './ImageContainer'; // Import your ImageContainer

const ProjectCard = ({ title, description,  defaultImg, hoverImg }) => {
  const [currentImage, setCurrentImage] = useState(defaultImg);

  return ( 
<div className="relative flex items-center p-4 shadow-lg cursor-pointer w-full align-center justify-center"
      onMouseEnter={() => setCurrentImage(hoverImg)} 
      onMouseLeave={() => setCurrentImage(defaultImg)}>
          
          <div>
          <p className='font-preahvihear font-semibold text-2xl'>{title} </p>
              <div className="flex flex-col bg-[#251C31] font-preahvihear w-[540px] rounded-[16px] " > 
                <p className='text-wrap ... m:mr-4 sm:mb-0   sm:h-auto p-6 font-preahvihear '>
                    {description}
                </p>
              </div>  
          </div>
          <div className='m-2'>
             <ImageContainer imgSrc={currentImage} /> 
          </div>
      </div>
        
  );
}

export default ProjectCard
