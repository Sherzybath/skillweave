import React from 'react';

const Nav = ({ pare }) => {
  return (
    <div className='NavBar'>
      <div className='NavLeft'>
        <a href="/">SkillWeave</a>
      </div>
      <div className='NavMiddle'>
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#faq">FAQ</a>
        <a href="#footer">Contact</a>
      </div>
      <div className='NavRight'>
        <button onClick={() => pare(1)}className='ColorButton2'>Sign Up</button>
        <button onClick={() => pare(2)} className='ColorButton'>Sign in</button>
      </div>
    </div>
  );
}

export default Nav;
