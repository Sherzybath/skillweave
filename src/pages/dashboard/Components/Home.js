import React from 'react';
import AiImage from '../Assets/wfh.jpeg';

const Home = ({toggle}) => {
  return (
    <div className=' h-[88vh] flex flex-row justify-between items-center bg-[#fff4f0]'>
      {/* Left Sectionffsfsdf */}
      <div className='flex flex-col p-[3vw_4.3vw] max-w-[30vw] min-w-[30vw]'>
        <span className='text-[3vw] font-semibold text-[#333]'>Find Your Freelancer</span>
        <span className='text-[3.3vw] font-extrabold text-[#f675b3]'>Manually by Yourself!</span>
        <span className='mt-[1vw] text-[0.8vw] font-medium text-[#555]'>
          Explore a wide range of freelancers and handpick the one that matches your requirements. Take control and choose the best fit manually.
        </span>
        <button className='mt-[2vw] bg-[#f675b3] w-[12vw] h-[3vw] text-[#ffff] rounded-full shadow-lg hover:bg-[#f675b3] transition-all duration-300'>
          Browse Freelancers
        </button>
      </div>

      {/* Image Section */}
      <div className='flex justify-center items-center'>
        <img src={AiImage} alt="Manual and AI Freelancer Search" className='max-w-full h-auto' />
      </div>

      {/* Right Section */}
      <div className='flex flex-col p-[3vw_4.3vw] max-w-[30vw] min-w-[30vw]'>
        <span className='text-[3vw] font-semibold text-[#333]'>Find Your Freelancer</span>
        <span className='text-[3.3vw] font-extrabold text-[#554ef3]'>Using AI Assistance!</span>
        <span className='mt-[1vw] text-[0.8vw] font-medium text-[#555]'>
          Let our AI match you with the perfect freelancer in seconds. Save time and ensure accuracy with our intelligent AI-driven platform.
        </span>
        <button onClick={toggle} className='mt-[2vw] bg-[#554ef3] w-[12vw] h-[3vw] text-[#fff] rounded-full shadow-lg hover:bg-[#554ef3] transition-all duration-300'>
          Use AI to Find Talent
        </button>
      </div>
    </div>
  );
}

export default Home;
