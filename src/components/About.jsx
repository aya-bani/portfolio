import React from 'react';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#11071F] pt-20'  > {/* Changed to 'pt-20' to add padding to the top */}
       <div>
        <div className='flex '>
        <img src="src\assets\images\Arrow.png" alt="" className=' ml-10' />
        <p className='text-white pt-4'>Hello, I'm <span className='text-custom-purple  underline'>Bani Aya.</span></p>
        </div>
        
        <div className='flex space-x-2 md:space-x-4 lg:space-x-8 font-preahvihear'>
          <img
            className="rounded-full w-32 h-32 object-cover"
            src="src\assets\images\profil.jpg"
            alt="Your Name"
          />
  
          <div>
            <p className='text-white font-preahvihear text-m'>A Web Developer</p>
            <p className='text-white font-preahvihear text-5xl relative'>
              who judges sites<br />
              by their 
              <span className='relative inline-block'>
              <img
                  src="src\assets\images\Ellipse 5.png"
                  alt="Code Icon"
                  className="absolute w-40 h-20 -top-2 left-1/2 transform -translate-x-1/2" // Adjusted width for larger size
                />
                <span className='text-custom-purple font-preahvihear'>code</span>
              </span>
              ...
            </p>
            <p className='text-white font-preahvihear text-xs'>Because every pixel matters, and behind every stunning UI lies a masterpiece of logic.</p>
          </div>
        </div>
        </div>
      <div className='flex flex-col text-white mt-24 w-full max-w-lg mx-auto'>
        <p className='text-4xl font-bold mb-4 font-preahvihear'>I'm a Software Engineering Student.</p>
        <p className='text-s mb-2 text-[#763CAC] font-preahvihear'>Currently, I'm a Software Engineering student at ISSATSO.</p>
        <p className='text-m mt-4 font-preahvihear'>
          I am a passionate Software Engineering student with a focus on web development and UI/UX design, specializing in React and Laravel. With experience in creating responsive, visually appealing applications, I combine efficient coding practices with user-centered design principles. Dedicated to refining my skills, I aim to craft seamless digital experiences and contribute to cutting-edge projects.
        </p>
      </div>
    </div>
  );
}
