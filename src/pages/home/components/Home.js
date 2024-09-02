import React from 'react';
import { Link } from 'react-router-dom';
import bigPic from '../Assets/biggpic.png';

const Home = () => {
  const onClick = () => {
    alert("Please Login/ SignUp");
  } 
  return (
    <div className='h-[100vh] flex items-center justify-between font-montserrat'>
      <div className='flex flex-col max-w-[30vw] min-w-[30vw] p-[3vw_4.3vw]'>
        <span className='text-[3vw] font-semibold'>End your work</span>
        <span className='text-[3.3vw] font-extrabold transition-transform transform hover:scale-105'>Woes today!</span>
        <span className='mt-[1vw] text-[1vw] font-medium'>
          We provide innovative solutions to streamline your business operations and enhance productivity. Discover our cutting-edge tools and services tailored to meet your unique needs.
        </span>
          <Link to="/dashboard"><button  className='mt-[2vw] bg-[#130035] w-[9vw] h-[3vw] text-[#edebf0] rounded-[2vw] shadow-lg hover:bg-[#1a003e] hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
            Find Work
          </button></Link> 
      </div>
      <div className='text-center text-[5vw]'>
        <img
          src={bigPic}
          alt="Random Pic"
          className='cursor-pointer shake-on-hover' // Apply the shake-on-hover class here
        />
      </div>
      <div className='flex flex-col max-w-[30vw] min-w-[30vw] p-[3vw_4.3vw] font-aganirya'>
        <span className='text-[3vw] font-semibold'>Find Epic work</span>
        <span className='text-[3.3vw] font-extrabold transition-transform transform hover:scale-105'>Opportunities!</span>
        <span className='mt-[1vw] text-[1vw] font-medium'>
          Search for top talent and amazing job opportunities in one place. Our platform connects you with the best candidates and employers, making job searches and hiring processes seamless.
        </span>
        
        <Link to="dashboardF"><button className='mt-[2vw] bg-[#130035] w-[9vw] h-[3vw] text-[#edebf0] rounded-[2vw] shadow-lg hover:bg-[#1a003e] hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
            Find Talent
          </button></Link>  
        
      </div>
    </div>
  );
}

export default Home;
