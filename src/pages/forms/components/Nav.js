import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='NavBar'>
        <div className='NavLeft'>
            <span><Link to="/"> SkillWeave</Link></span></div>
        {/* <div className='NavMiddle'>
            <button>About</button>
            <button>FAQ</button>
            <button>Team</button>
            <button>Contact</button>
        </div> */}
            {/* <div className='NavRight'>
                <button onClick={() => pare(1)}>Sign Up</button>
                <button onClick={() => pare(2)} className='ColorButton'>Sign in</button>
            </div> */}
    </div>
  )
}

export default Nav