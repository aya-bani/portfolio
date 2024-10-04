import React from 'react'

const Contact = () => {
  return (
    <section className='h-1/2 sm:h-3/4 lg:h-1/2 bg-[#11071F] flex flex-col items-center justify-center pt-10 text-white'>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 font-preahvihear">Get In Touch</h2>
          
        </div>
        <div>
            <p className=" mt-2 font-preahvihear">
              I’d love to hear from you! Feel free to reach out to me through any of the following methods:
            </p>
        </div>
            
        

    <div className="flex flex-col font-preahvihear">

        <p className="font-preahvihear">Email: <a href="ayabani234@gmail.com" className="text-custom-purple font-preahvihear">ayabani234@gmail.com</a></p>
        <p className="font-preahvihear">Phone: +216 29003307</p>
        <p className="font-preahvihear">LinkedIn: <a href="https://www.linkedin.com/in/aya-bani-75354a284/" className="text-custom-purple font-preahvihear">linkedin.com/in/ayabani</a></p>
        <p className="font-preahvihear">GitHub: <a href="https://github.com/Bani-Aya" className="text-custom-purple font-preahvihear">github.com/Bani-Aya</a></p>
    
    </div>

    </section>
  )
}

export default Contact
