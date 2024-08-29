import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleQuestion, faMessage} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const TagList = () => {
  return (
    <div className='TagList'>
        <div className='ManualSearch'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icons'/>
        <input placeholder='Search'></input>
        </div>
      <span>Jobs</span>
      <div className='line'></div>

    </div>
  )
}

export default TagList