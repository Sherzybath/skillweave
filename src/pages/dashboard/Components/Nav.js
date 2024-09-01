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
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotificationDropdown(false); // Close notification dropdown if open
  };

  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
    setShowProfileDropdown(false); // Close profile dropdown if open
  };

  return (
    <div className="NavBar flex justify-between items-center px-4 py-2 bg-[#f1f1f1] border  border-b-2 ">
      <div className="NavLeft text-lg font-semibold">
        <span>
          <Link to="/"> SkillWeave</Link>
        </span>
      </div>

      <div className="NavRight flex items-center space-x-4">
      <Link to="/chat"><FontAwesomeIcon icon={faMessage} className="icons text-xl" /></Link>
        
        {/* Circle Question Icon with anchor link to #footer */}
        <a href="#footer">
          <FontAwesomeIcon icon={faCircleQuestion} className="icons text-xl" />
        </a>

        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="icons text-xl cursor-pointer"
            onClick={toggleNotificationDropdown}
          />
          {showNotificationDropdown && (
            <div className="absolute right-0 mt-2 bg-[#b0c4c4] text-[#13544e] rounded-md shadow-lg w-[13rem] h-20 ">
              <div className="relative">
                <div className="absolute top-[-0.5rem] right-1 w-4 h-0 border-x-[0.5rem] border-x-transparent border-b-[0.5rem] border-[#b0c4c4]"></div>
              </div>
              <div className="block px-4 py-2 text-center mt-4 text-[#13544e]">
                No new notifications
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <img
            src={logo}
            alt="Profile"
            className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer"
            onClick={toggleProfileDropdown}
          />
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 bg-[#b0c4c4] text-[#13544e] rounded-md shadow-lg w-[12rem]">
              <div className="relative">
                <div className="absolute top-[-0.5rem] right-4 w-4 h-0 border-x-[0.5rem] border-x-transparent border-b-[0.5rem] border-[#b0c4c4]"></div>
              </div>
              <Link
                to="/Forms"
                className="block px-4 py-2 text-[#13544e] hover:bg-[#13544e] hover:text-[#fff4f0] rounded-md text-center"
                onClick={() => setShowProfileDropdown(false)}
              >
                Update Profile
              </Link>
              <Link to="/">
                <button
                  onClick={() => {
                    setShowProfileDropdown(false); /* Add logout logic here */
                  }}
                  className="block w-full text-center px-4 py-2 text-[#13544e] hover:bg-red-700 hover:text-[#fff4f0] rounded-md"
                >
                  Log Out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
