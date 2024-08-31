import React from "react";
import { Link } from "react-router-dom";
// Import the image from your assets folder
import bigPic from "../Assets/biggpic.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeLeft Column">
        <span>End your work</span>
        <span>Woes today!</span>
        <span>
          Discover endless remote freelance opportunities tailored to your
          skills. Connect with top clients, showcase your talent, and elevate
          your career from anywhere in the world.
        </span>
        <Link to="/dashboard">
          <button>Find Work</button>
        </Link>
      </div>
      <div className="HomeMiddle Column">
        {/* Display the imported image */}
        <img src={bigPic} alt="Random Pic" />
      </div>
      <div className="HomeRight Column">
        <span>Find great work</span>
        <span>Opportunities</span>
        <span>
          Find skilled freelancers for your projects with ease. Connect with top
          talent, streamline your hiring process, and bring your ideas to life
          with expert support.
        </span>
        <Link to="/dashboardF">
          <button>Find Talent</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
