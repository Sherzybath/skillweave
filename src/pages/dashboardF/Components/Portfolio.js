import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import {faDollar, faLocationDot, faXmark} from '@fortawesome/free-solid-svg-icons';
const Tags = ({tag}) => {
    return (
        <div className="DisplayTag">
            {tag}
        </div>
    );
  };

function Portfolio({list, toggle}) {
  return (
    <div className='Port'>
        <div className='PortDisplay'>
            <div className='PortNav'>
                <button onClick={toggle}><FontAwesomeIcon icon={faXmark} /></button>
                <div>
                    <span>{list.username}</span>
                    <img src={list.logo} />
                    
                </div>
                
            </div>

            <div className='PortDetails'>
                <div className='TopSection'>
                    <span className='Title'>{list.title}</span>
                    <div className='liner'>
                        <span >posted 5 days ago</span> 
                    </div>
                    
                </div>
                <div className='thumbnailSection'>
                    <img src={list.thumbnail} />
                </div>
                <div className='DescSection'>
                    <p>{list.description}</p>
                    
                </div>
                
                <div className='twoSection'>
                    {/* <div className='DumbDiv'>
                        <FontAwesomeIcon icon={faClock}/><span>30 days</span>
                    </div> */}
                    <div className='DumbDiv'><span><FontAwesomeIcon icon={faLocationDot}/>  India</span></div>
                    
                    <div className='DumbDiv'>
                    <FontAwesomeIcon icon={faDollar}/><span>{list.pricing}</span>
                    </div>
                    <div className='DumbDiv'>
                       <FontAwesomeIcon icon={faStar} /> <span>{list.experience}</span>
                    </div>
                </div>
                <div className='TagSection'>
                    {list.skills.map((tag, index) => (
                        <Tags key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio