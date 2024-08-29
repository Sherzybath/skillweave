import React from 'react'

const Nav = ({pare}) => {
  return (
    <div className='NavBar'>
        <div className='NavLeft'>SkillWeave</div>
        <div className='NavMiddle'>
            <button>About</button>
            <button>FAQ</button>
            <button>Team</button>
            <button>Contact</button>
        </div>
        <div className='NavRight'>
            <button onClick={() => pare(1)}>Sign Up</button>
            <button onClick={() => pare(2)} className='ColorButton'>Sign in</button>
        </div>
    </div>
  )
}

export default Nav