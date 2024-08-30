import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
function Portfolio() {
  return (
    <div className='Port'>
        <div className='PortDisplay'>
            <div className='PortNav'></div>
            <div className='PortDetails'>
                <div className='TopSection'>
                    <span className='Title'>Web Development Projects, Minimalistic Designs</span>
                    <div className='liner'>
                        <span >posted 5 days ago</span> 
                        <span><FontAwesomeIcon icon={faLocationDot}/>  India</span>
                    </div>
                    
                </div>
                <div className='DescSection'>
                    <p> I am launching a new product and need a digital marketing specialist to create and execute a marketing strategy. The strategy should include social media marketing, email campaigns, and content marketing to generate buzz and drive sales. I am looking for someone with experience in launching products online and can provide measurable results. Knowledge of SEO and PPC campaigns is a plus.</p>
                    
                </div>
                <div className='twoSection'>
                    <div className='Left'>
                        <FontAwesomeIcon icon={faClock}/><span>30 days</span>
                    </div>
                    <div className='Right'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio