import React from 'react'
import Nav from "./Nav";
import Main from "./Main";
const MainCont = ({toggle2}) => {
  return (
    <div className='MainCont'>
        <Nav />
        <Main tog={toggle2}/>
    </div>
  )
}

export default MainCont