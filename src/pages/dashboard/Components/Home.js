import React from "react";
import AiImage from "../Assets/wfh.jpeg";

const Home = ({ toggle }) => {
  // Function to handle smooth scrolling to the search input
  const scrollToSearchBar = () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth", block: "start" });
      searchInput.focus(); // Ensures the cursor is placed in the input field
      window.scrollBy(0, -20); // Adjusts the scroll to keep the input at the top of the view
    }
  };

  return (
    <div className="h-[88vh] flex flex-row justify-between items-center bg-[#fff4f0]">
      {/* Left Section */}
      <div className="flex flex-col p-[3vw_4.3vw] max-w-[30vw] min-w-[30vw]">
        <span className="text-[3vw] font-semibold text-[#333]">
          Find Your Next Project
        </span>
        <span className="text-[3.3vw] font-extrabold text-[#f675b3]">
          Manually by Yourself!
        </span>
        <span className="mt-[1vw] text-[0.8vw] font-medium text-[#555]">
          Find Your Next Gig Take Charge of Your Career! Explore a vast array of
          job opportunities and handpick the ones that match your skills. Take
          control and choose the projects that best fit your expertise.
        </span>
        {/* Button with smooth scrolling to search bar */}
        <button
          onClick={scrollToSearchBar}
          className="mt-[2vw] bg-[#f675b3] w-[12vw] h-[3vw] text-[#ffff] rounded-full shadow-lg hover:bg-[#f675b3] transition-all duration-300 hover:scale-[1.15]"
        >
          Browse Gigs
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src={AiImage}
          alt="Manual and AI Freelancer Search"
          className="max-w-full h-auto shake-on-hover"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col p-[3vw_4.3vw] max-w-[30vw] min-w-[30vw]">
        <span className="text-[3vw] font-semibold text-[#333]">
          Find Your Next Project
        </span>
        <span className="text-[3.3vw] font-extrabold text-[#554ef3]">
          Using AI Assistance!
        </span>
        <span className="mt-[1vw] text-[0.8vw] font-medium text-[#555]">
          Let Our AI Match You with the Perfect Job in Seconds. Save time and
          secure the best opportunities with our intelligent AI-driven platform.
        </span>
        <button
          onClick={toggle}
          className="mt-[2vw] bg-[#554ef3] w-[12vw] h-[3vw] text-[#fff] rounded-full shadow-lg hover:bg-[#554ef3] transition-all duration-300  hover:scale-[1.15]"
        >
          Use AI to Find Gigs
        </button>
      </div>
    </div>
  );
};

export default Home;
