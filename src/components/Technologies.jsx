import React from 'react';

const Technologies = () => {
  return (
    <section className='h-1/2 sm:h-3/4 lg:h-1/2 bg-[#11071F] flex flex-col items-center justify-center pt-10 text-white h-auto'>
      <div>
        <h2 className="text-3xl font-bold text-white mb-4 font-preahvihear">Technologies I've Worked With</h2>
      </div>
      <p className="w-1/2 text-center mb-4 font-preahvihear mt-10">
        In my journey as a full-stack developer, I’ve had the opportunity to work with a diverse range of technologies that empower me to build innovative and efficient solutions.
      </p>
      <div className='flex flex-col'>
        <div className='relative flex items-center justify-center flex-wrap gap-4'>
          {[
            { src: "src/assets/images/figma.png", size: "w-6" },
            { src: "src/assets/images/react.png", size: "w-10" },
            { src: "src/assets/images/laravel.png", size: "w-18" },
            { src: "src/assets/images/jslogo.png", size: "w-12" },
            { src: "src/assets/images/csslogo.png", size: "w-12" },
            { src: "src/assets/images/springboot.png", size: "w-12" }
          ].map((tech, index) => (
            <div 
              key={index} 
              className="sm:w-20 sm:h-20 bg-[#251C31] rounded-full flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <img src={tech.src} alt="" className={`${tech.size} h-auto`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
