import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const TagList = ({onSearch , onSearchTerm}) => {
  return (
    <div className='TagList'>
        <div className='ManualSearch'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icons'/>
        <input placeholder='Search' value={onSearchTerm}
          onChange={(e) => onSearch(e.target.value)}></input>
        </div>
      <span>Jobs</span>
      <div className='line'></div>

    </div>
  )
}

export default TagList