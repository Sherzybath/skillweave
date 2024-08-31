import React from 'react';
import homeimage from "../Assets/home-main.svg";

const About = () => {
  return (
    <div id="about" className='bg-[#13544e] h-[90vh] p-[3vw_4.3vw] text-[#edebf0] flex flex-row gap-[2vw]'>
      <div className='BigImg w-[30vw] h-[30vw] bg-[#13544e] rounded-[3vw] flex items-center justify-center'>
        <img
          src={homeimage}
          alt="SkillWeave Overview"
          className='w-full h-full object-cover rounded-[3vw]'
        />
      </div>
      <div className='Desc flex flex-col justify-center max-w-[60vw]'>
        {/* <span className='text-[1.6vw] text-[#91e6b3]'>SkillWeave</span> */}
        <span className='mt-[1vw] text-[3.4vw] leading-none  text-[#e6e6e6] transition-transform transform hover:scale-105 mb-3'>About Us</span>
        <span className='mt-[0.4vw] text-[3.4vw] text-[#91e6b3] leading-none'>and why</span>
        <span className='mt-[0.4vw] text-[3.4vw] text-[#91e6b3] leading-none'>we are better</span>
        
        <ul className='list-disc pl-5 mt-[2vw] text-[1.3vw]'>
          <li className='mb-2 text-[#e6e6e6]'>Access the top 1% of talent with our exclusive platform.</li>
          <li className='mb-2 text-[#e6e6e6]'>Integrated chat system with our custom-built chatbot, Raviel, to facilitate seamless communication between clients and freelancers.</li>
          <li className='mb-2 text-[#e6e6e6]'>Proprietary payment gateway, designed and developed in-house, ensuring secure and efficient transactions.</li>
          <li className='mb-2 text-[#e6e6e6]'>Exceptional support and user experience tailored with dedication, sweat, and hard work.</li>
          <li className='mb-2 text-[#e6e6e6]'>Contact us via the details provided in the footer for any inquiries or support.</li>
        </ul>

        <span className='mt-[2vw] text-[1.3vw] mb-2 text-[#e6e6e6]'>
          Our project is built with passion and a commitment to delivering the best freelancing experience. We stand out from competitors like Upwork and Fiverr with our unique features and personalized service.
        </span>
      </div>
    </div>
  );
}

export default About;
