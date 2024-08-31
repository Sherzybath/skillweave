import Nav from "./Nav";
import Main from "./Main";
import Chatbot from "./Chatbot";
import MainCont from "./MainCont";
import { useState, useEffect } from "react";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function DashboardF() {
  const [showComponent, setShowComponent] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  // const [blogSchema, setFreelancers] = useState([])
  const toggleComponent = () => {
    setShowComponent((prevState) => !prevState);
  };
  const blogSchema = [
    {
      thumbnail: "/thumbnails/Raviel.png",
      title: "Web Development with Sherzybath",
      daysDelivery: 7,
      pricing: 40,
      logo: "/logos/SherzyChibi.png",
      username: "Sherzybath",
      numberOfStars: 5,
      numberOfReviews: 1203,
      description:
        "With 9 years of design experience at McKinsey & Company and as a top-rated freelancer in Upwork with a 98% job success rate from 2,500+ projects, I would be glad to provide my view on the design approach and what could be optimal to bring the desired results to the requirement. Content engagement or business analytics are advanced agendas. I will be engaging with just the design aspect of the project. It would be great to have a brief outline of your requirement before we get started. After the consultation, I'll send you a detailed summary of my recommendations so that you can implement them yourself, or, I can provide a quote to take care of everything for you",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Web Development"],
      experience: "Advanced",
    },
    {
      thumbnail: "/thumbnails/LeftArm.png",
      title: "Graphic Design",
      daysDelivery: 5,
      pricing: 100,
      logo: "path/to/logo2.png",
      username: "freelancer2",
      numberOfStars: 4.8,
      numberOfReviews: 80,
      description:
        "Creative graphic design solutions for your business, including logos and branding.",
      skills: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Logo Design",
        "Branding",
        "UI/UX Developer",
      ],
      experience: "Intermediate",
    },
    {
      thumbnail: "/thumbnails/Kotteri.png",
      title: "Content Writing",
      daysDelivery: 3,
      pricing: 150,
      logo: "path/to/logo3.png",
      username: "freelancer3",
      numberOfStars: 4.2,
      numberOfReviews: 200,
      description:
        "High-quality content writing services for blogs, articles, and websites.",
      skills: ["SEO Writing", "Blogging", "Copywriting", "Editing", "Research"],
      experience: "Intermediate",
    },
    {
      thumbnail: "/thumbnails/Raviel2.png",
      title: "SEO Services",
      daysDelivery: 10,
      pricing: 400,
      logo: "path/to/logo4.png",
      username: "freelancer4",
      numberOfStars: 4.7,
      numberOfReviews: 95,
      description:
        "Expert SEO services to improve your website's search engine rankings.",
      skills: [
        "SEO",
        "Keyword Research",
        "Link Building",
        "Analytics",
        "Content Strategy",
      ],
      experience: "Advanced",
    },
  ];

  // useEffect(() => {
  //   const fetchFreelancers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/freelance');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setFreelancers(data);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };

  //   fetchFreelancers();
  // }, []);
  return (
    <div className="Dashboard">
      <MainCont
        toggle2={toggleComponent}
        LIST={blogSchema}
        select={setSelectedPost}
      />
      {/* <div className="liner">
        <Nav toggle={toggleComponent}/>
        <Main/>
        </div> */}
      {showComponent && <Chatbot toggle={toggleComponent} />}
      {selectedPost && (
        <Portfolio list={selectedPost} toggle={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export default DashboardF;
