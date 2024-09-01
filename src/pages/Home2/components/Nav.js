import React, { useState } from "react";
import profileImage from "../Assets/hv.jpeg"; // Path to your profile image
import { Link } from "react-router-dom";
const Nav = ({ pare }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#fff4f0] p-[1.5vw_4.3vw] flex items-center justify-between min-h-[9.5vh] z-10 border  border-b-2 ">
      <div className="text-[1.5vw] flex flex-col justify-center ">
        <a href="/" className="font-apercu">
          SkillWeave
        </a>
      </div>
      <div className="flex gap-[3.3vw] pl-[7vw]">
        <a href="#about" className="hover:scale-[1.1]">
          About
        </a>
        <a href="#faq" className="hover:scale-[1.1]">
          FAQ
        </a>
        <a href="#team" className="hover:scale-[1.1]">
          Team
        </a>
        
        <a href="#footer" className="hover:scale-[1.1]">
          Contact
        </a>
      </div>
      <div className="relative min-w-52 flex justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer mr-20 "
          onClick={toggleDropdown}
        />
        {showDropdown && (
          <div className="absolute  right-3 mt-2 bg-[#aac7c6] text-white rounded-md shadow-lg w-[12rem]">
            <div className="relative">
              <div className="absolute top-[-0.5rem]  right-20 w-4 h-0  border-x-[0.5rem] border-x-transparent border-b-[0.5rem] border-black"></div>
            </div>
            <Link to="/Forms">
              <a
                href="#portfolio"
                className="block text-center px-4 py-2 text-[#13544e] hover:bg-[#13544e] hover:text-[#fff4f0] rounded-md"
                onClick={() => setShowDropdown(false)}
              >
                Update Profile
              </a>
            </Link>

            {/* <a
              href="#jobs"
              className="block px-4 py-2 text-center text-[#13544e] hover:bg-[#13544e] hover:text-[#fff4f0] rounded-md"
              onClick={() => setShowDropdown(false)}
            >
              Update Jobs
            </a> */}
            <Link to="/">
              <button
                onClick={() => {
                  setShowDropdown(false);
                  pare(0);
                }}
                className="block w-full text-left px-4 py-2 text-center text-[#13544e] hover:bg-red-800 hover:text-[#fff4f0] rounded-md"
              >
                Log Out
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
