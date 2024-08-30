import React, { useState } from 'react';
import profileImage from '../Assets/hv.jpeg'; // Path to your profile image

const Nav = ({ pare }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#fff4f0] p-[1.5vw_4.3vw] flex items-center justify-between min-h-[9.5vh] z-10'>
      <div className='text-[1.5vw] flex flex-col justify-center'>
        <a href="/" >SkillWeave</a>
      </div>
      <div className='flex gap-[3.3vw] pl-[7vw]'>
        <a href="#about"  >About</a>
        <a href="#team"  >Team</a>
        <a href="#faq"  >FAQ</a>
        <a href="#footer"  >Contact</a>
      </div>
      <div className='relative'>
        <img
          src={profileImage}
          alt="Profile"
          className='w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer mr-20'
          onClick={toggleDropdown}
        />
        {showDropdown && (
          <div className='absolute right-3 mt-2 bg-[#13544e] text-white rounded-md shadow-lg w-[12rem]'>
            <div className='relative'>
              <div className='absolute top-[-0.5rem]  right-20 w-4 h-0 border-x-[0.5rem] border-x-transparent border-b-[0.5rem] border-black'></div>
            </div>
            <a href="#portfolio" className='block text-center px-4 py-2 text-[#faf3e3] hover:bg-[#b56b61] rounded-md' onClick={() => setShowDropdown(false)}>Update Portfolio</a>
            <a href="#jobs" className='block px-4 py-2 text-center text-[#faf3e3] hover:bg-[#b56b61] rounded-md' onClick={() => setShowDropdown(false)}>Update Jobs</a>
            <button
              onClick={() => { setShowDropdown(false); pare(0); }}
              className='block w-full text-left px-4 py-2 text-center text-[#faf3e3] hover:bg-red-800 rounded-md'
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
