import React from 'react'
import logo from '../Assets/SherzyChibi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleQuestion, faMessage} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  return (
    <div className='NavBar'>
        <div className='NavLeft'>
            <span>SkillWeave</span>
            <div className='Search'>
              
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icons'/>
                <input placeholder='Search'></input>
            </div>
            </div>
        
        <div className='NavRight'>
            <FontAwesomeIcon icon={faMessage} className='icons'/>
            <FontAwesomeIcon icon={faCircleQuestion} className='icons'/>
            <FontAwesomeIcon icon={faBell} className='icons'/>
            <img src={logo} />
        </div>
    </div>
  )
}

export default Nav