import React from "react";

const Nav = ({ pare }) => {
  return (
    <div className="NavBar border  border-b-2 ">
      <div className="NavLeft">
        <a href="/">SkillWeave</a>
      </div>
      <div className="NavMiddle">
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
      <div className="NavRight min-w-52">
        <button onClick={() => pare(1)} className="ColorButton2 h-[2.5rem] ">
          Sign Up
        </button>
        <button onClick={() => pare(2)} className="ColorButton h-[2.5rem]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
