import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Chatbot = ({toggle}) => {
  return (
    <div className='Chatbot'>
        <div className='ChatNav'>
            <button><FontAwesomeIcon onClick={toggle} className='icons' icon={faXmark}/></button>
        </div>
        <div className='ChattingArea'></div>
        <div className='ChatInput'>
            <input></input>
        </div>
    </div>
  )
}

export default Chatbot