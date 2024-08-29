import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = ({listing, SE, sSE}) => {
  
  return (
    <div className='NoticeBoard'>
        <Notice list={listing}/>
        <Filter selectedExperience={SE} setSelectedExperience={sSE}/>
    </div>
  )
}

export default List