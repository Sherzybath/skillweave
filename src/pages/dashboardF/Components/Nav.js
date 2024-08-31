import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/SherzyChibi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleQuestion,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="NavBar flex justify-between items-center px-4 py-2 bg-[#f1f1f1] border  border-b-2 ">
      <div className="NavLeft text-lg font-semibold">
        <span>
          <Link to="/"> SkillWeave</Link>
        </span>
      </div>

      <div className="NavRight flex items-center space-x-4">
        <FontAwesomeIcon icon={faMessage} className="icons text-xl" />
        <FontAwesomeIcon icon={faCircleQuestion} className="icons text-xl" />
        <FontAwesomeIcon icon={faBell} className="icons text-xl" />
        <div className="relative">
          <img
            src={logo}
            alt="Profile"
            className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-[#b0c4c4] text-[#13544e] rounded-md shadow-lg w-[12rem]">
              <div className="relative">
                <div className="absolute top-[-0.5rem] right-4 w-4 h-0 border-x-[0.5rem] border-x-transparent border-b-[0.5rem] border-[#b0c4c4]"></div>
              </div>
              <Link
                to="/profile"
                className="block px-4 py-2 text-[#13544e] hover:bg-[#b56b61] hover:text-[#fff4f0] rounded-md text-center"
                onClick={() => setShowDropdown(false)}
              >
                Update Profile
              </Link>

              <button
                onClick={() => {
                  setShowDropdown(false); /* Add logout logic here */
                }}
                className="block w-full text-center px-4 py-2 text-[#13544e] hover:bg-red-900  hover:text-[#fff4f0]   rounded-md"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
