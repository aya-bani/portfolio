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
        <div className='relative flex items-center justify-center'>
          <div className="mb-4 sm:mr-4 sm:mb-0 sm:w-20 sm:h-20 bg-[#251C31] rounded-full flex items-center justify-center">
            <img src="src/assets/images/figma.png" alt="" className='w-6 h-auto' />
          </div>
          <div className="mb-4 sm:mr-4 sm:mb-0 sm:w-20 sm:h-20 bg-[#251C31] rounded-full flex items-center justify-center">
            <img src="src/assets/images/react.png" alt="" className='w-10 h-auto' />
          </div>
          <div className="mb-4 sm:mr-4 sm:mb-0 sm:w-20 sm:h-20 bg-[#251C31] rounded-full flex items-center justify-center">
            <img src="src/assets/images/laravel.png" alt="" className='w-18 h-auto' />
          </div>
          <div className="mb-4 sm:mr-4 sm:mb-0 sm:w-20 sm:h-20 bg-[#251C31] rounded-full flex items-center justify-center">
            <img src="src/assets/images/jslogo.png" alt="" className='w-12 h-auto' />
          </div>
          <div className="mb-4 sm:mr-4 sm:mb-0 sm:w-20 sm:h-20 bg-[#251C31] rounded-full flex items-center justify-center">
            <img src="src/assets/images/csslogo.png" alt="" className='w-12 h-auto' />
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Technologies;
