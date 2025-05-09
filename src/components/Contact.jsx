import React from 'react';

const Contact = () => {
  return (
    <section className="h-auto bg-[#1A0B2E] flex flex-col items-center justify-center py-6 text-white rounded-t-[100px]">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2 ">Get In Touch</h2>
        <img 
          src="/assets/images/contact-gif.gif" 
          alt="Contact Animation"
          className="w-28 h-auto mb-4" 
        />
      </div>
      <div>
        <a href="mailto:baniaya.it@gmail.com">
          <button className="btn  text-white border rounded-[26px] w-24 h-10 text-sm font-bold ">
            Email Me
          </button>
        </a>
        <a href="https://wa.me/21629003307" className="text-gray-600">
          <button className="btn mx-2  text-white border-[#866adc] bg-[#866adc] rounded-[26px] w-24 h-10 text-sm font-bold">
          WhatsApp
          </button> 
        </a>
      </div>
      <div className="mt-6 w-full  border-t border-[#866adc] pt-4 flex justify-between p-8 ">

        <p className="text-white">© 2025 All rights reserved.</p>
        <a href="https://www.linkedin.com/in/aya-bani-75354a284/" className="hidden md:block text-white">LinkedIn</a>

      </div>



      
    </section>
  );
}

export default Contact;
