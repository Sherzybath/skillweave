import React from 'react';
import { Link } from 'react-router-dom';
// Import the image from your assets folder
import bigPic from '../Assets/biggpic.png';

const Home = () => {
  return (
    <div className='Home'>
      <div className='HomeLeft Column'>
        <span>End your work</span>
        <span>Woes today!</span>
        <span>We provide business blah blah blah blah blah blah blah blah blah blah blah blah</span>
        <Link to="/dashboard"><button>Find Work</button></Link>
      </div>
      <div className='HomeMiddle Column' >
        {/* Display the imported image */}
        <img src={bigPic} alt="Random Pic" />
      </div>
      <div className='HomeRight Column'>
        <span>Find great work</span>
        <span>Opportunities</span>
        <span>Search for great work blah blah blah blah blah blah blah blah blah blah blah blah</span>
        <Link to="/dashboardF"><button>Find Talent</button></Link>
      </div>
    </div>
  );
}

export default Home;
