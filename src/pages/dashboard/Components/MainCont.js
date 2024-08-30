import React from 'react'
import Nav from "./Nav";
import Main from "./Main";
const MainCont = ({toggle2, LIST}) => {
  return (
    <div className='MainCont'>
        <Nav />
        <Main tog={toggle2} Schema={LIST}/>
    </div>
  )
}

export default MainCont