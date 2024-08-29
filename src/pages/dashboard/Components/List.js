import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = ({listing}) => {

  return (
    <div className='NoticeBoard'>
        <Notice list={listing}/>
        <Filter />
    </div>
  )
}

export default List