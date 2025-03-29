import React, { useState } from "react";
import { ImageContainer } from "./ImageContainer"; // Import your ImageContainer
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const ProjectCard = ({ title, description, defaultImg, hoverImg, github }) => {
  const [currentImage, setCurrentImage] = useState(defaultImg);

  return (
    <div
      className="relative flex items-center p-4 shadow-lg cursor-pointer w-full align-center justify-center flex-wrap gap-4"
      onMouseEnter={() => setCurrentImage(hoverImg)}
      onMouseLeave={() => setCurrentImage(defaultImg)}
    >
      <div>
        <p className="font-preahvihear font-semibold text-2xl">{title}</p>
        <div className="flex flex-col bg-[#251C31] font-preahvihear w-[540px] rounded-[16px]">
          <p className="text-wrap m:mr-4 sm:mb-0 sm:h-auto p-6 font-preahvihear">
            {description}
          </p>
          {/* GitHub Link */}
          {github && (
            <div className="flex justify-end p-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="m-2">
        <ImageContainer imgSrc={currentImage} />
      </div>
    </div>
  );
};

export default ProjectCard;
