import React from 'react'
import Raviel from '../Assets/Raviel.png'
import Sherzy from '../Assets/SherzyChibi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faStar} from '@fortawesome/free-solid-svg-icons';
const BlogPost = ({ thumbnail, title, days, price, username , stars, reviews}) => {
  return (
    <div className="post2">
      <img className='thumbnail' src={thumbnail}/>
      <div className='basic'>
        <span className='description'>{title}</span>
        <div className='liner'>
          <span><FontAwesomeIcon icon={faClock} className='icon'/>  {days} day delivery</span>
          <span>Pricing: <strong>{price}</strong></span>
        </div>

      </div>
      <div className='profile'>
        <img src={Sherzy} className='dp'/>
        <span>{username}</span>
        <div className='Reviews'><FontAwesomeIcon className='star' icon={faStar}/><span>{stars}</span><span>({reviews})</span></div>
        
      </div>
    </div>
  );
};
const NoticeBoard = ({list}) => {
  return (
    <div className='notices2'>
      {list.map((blog, index) => (
        <BlogPost
          key={index}
          thumbnail={blog.thumbnail}
          title={blog.title}
          days={blog.daysDelivery}
          experience={blog.experience}
          price={blog.pricing}
          username={blog.username}
          stars={blog.numberOfStars}
          reviews={blog.numberOfReviews}
        />
      ))}

      {/* <div className="post2">
      </div>
      <div className="post2">
        
      </div>
      <div className="post2">
      </div> */}
    </div>
  )
}

export default NoticeBoard