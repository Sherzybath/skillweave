import React from 'react'
import Nav from "./Nav";
import Main from "./Main";
const MainCont = ({toggle2, LIST, select, para}) => {
  return (
    <div className='MainCont'>
        <Nav />
        <Main tog={toggle2} Schema={LIST} display={select} para={para}/>
    </div>
  )
}

export default MainCont