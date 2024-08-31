import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCoffee,
  faDollar,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Tags = ({ tag }) => {
  return <div className="DisplayTag">{tag}</div>;
};

function Portfolio({ list, toggle }) {
  const navigate = useNavigate(); // Initialize navigate

  const handleKofiClick = () => {
    navigate('/payment'); // Navigate to PaymentPage
  };

  return (
    <div className="Port overflow-x: hidden;">
      <AnimatePresence>
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: list ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 150, damping: 40 }}
        >
          <div className="PortDisplay ">
            <div className="PortNav">
              <button onClick={toggle}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <div>
                <span>{list.username}</span>
                <img src={list.logo} />
              </div>
            </div>

            <div className="PortDetails">
              <div className="TopSection">
                <span className="Title">{list.title}</span>
                <div className="liner">
                  <span>posted 5 days ago</span>
                </div>
              </div>
              <div className="thumbnailSection">
                <img src={list.thumbnail} />
              </div>
              <div className="DescSection">
                <p>{list.description}</p>
              </div>

              <div className="twoSection">
                <div className="DumbDiv">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} /> India
                  </span>
                </div>

                <div className="DumbDiv">
                  <FontAwesomeIcon icon={faDollar} />
                  <span>{list.pricing}</span>
                </div>
                <div className="DumbDiv">
                  <FontAwesomeIcon icon={faStar} />{" "}
                  <span>{list.experience}</span>
                </div>
                <div className="DumbDiv">
                  <button onClick={handleKofiClick} className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCoffee} />{" "}
                    <span>Kofi</span>
                  </button>
                </div>
              </div>
              <div className="TagSection">
                {list.skills.map((tag, index) => (
                  <Tags key={index} tag={tag} />
                ))}
              </div>
              
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
