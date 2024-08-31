import React from 'react';
import { Link } from 'react-router-dom';
import bigPic from '../Assets/biggpic.png';

const Home = () => {
  return (
    <div className='h-[100vh] flex items-center justify-between font-montserrat'>
      <div className='flex flex-col max-w-[30vw] min-w-[30vw] p-[3vw_4.3vw]'>
        <span className='text-[3vw] font-semibold'>End your work</span>
        <span className='text-[3.3vw] font-extrabold'>Woes today!</span>
        <span className='mt-[1vw] text-[0.8vw] font-medium'>
          We provide business blah blah blah blah blah blah blah blah blah blah blah blah
        </span>
        <Link to="/dashboard">
          <button className='mt-[2vw] bg-[#130035] w-[9vw] h-[3vw] text-[#edebf0] table-cell align-middle rounded-[2vw]'>
            Find Work
          </button>
        </Link>
      </div>
      <div className='text-center text-[5vw]'>
        <img src={bigPic} alt="Random Pic" />
      </div>
      <div className='flex flex-col max-w-[30vw] min-w-[30vw] p-[3vw_4.3vw] font-aganirya'>
        <span className='text-[3vw] font-semibold'>Find great work</span>
        <span className='text-[3.3vw] font-extrabold'>Opportunities</span>
        <span className='mt-[1vw] text-[0.8vw] font-medium'>
          Search for great work blah blah blah blah blah blah blah blah blah blah blah blah
        </span>
        <Link to="/dashboardF">
          <button className='mt-[2vw] bg-[#130035] w-[9vw] h-[3vw] text-[#edebf0] table-cell align-middle rounded-[2vw]'>
            Find Talent
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
