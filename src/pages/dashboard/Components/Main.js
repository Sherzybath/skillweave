import React from 'react'
import Home from './Home'
import TagList from './TagList'
import List from './List'
import Footer from './Footer'
const Main = ({tog}) => {
  return (
    <div className='main'>
        <Home toggle={tog}/>
        <TagList />
        <List />
        <Footer />
    </div>
  )
}

export default Main