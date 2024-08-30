import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = ({listing, SE, sSE, select}) => {

  return (
    <div className='NoticeBoard'>
        <Notice list={listing} display={select}/>
        <Filter selectedExperience={SE} setSelectedExperience={sSE}/>
    </div>
  )
}

export default List