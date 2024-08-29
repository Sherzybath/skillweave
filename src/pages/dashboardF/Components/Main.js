import React from 'react'
import Home from './Home'
import TagList from './TagList'
import List from './List'
import Footer from './Footer'
import { useState } from 'react'
const Main = ({tog}) => {
  const blogSchema = [
    {
      thumbnail: "/thumbnails/Raviel.png",
      title: "Web Development",
      daysDelivery: 7,
      pricing: "$500",
      logo: "path/to/logo1.png",
      username: "Sherzybath",
      numberOfStars: 5,
      numberOfReviews: 1203,
      description: "Professional web development services including front-end and back-end development.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      experience: "Advanced"
    },
    {
      thumbnail: "/thumbnails/LeftArm.png",
      title: "Graphic Design",
      daysDelivery: 5,
      pricing: "$300",
      logo: "path/to/logo2.png",
      username: "freelancer2",
      numberOfStars: 4.8,
      numberOfReviews: 80,
      description: "Creative graphic design solutions for your business, including logos and branding.",
      skills: ["Photoshop", "Illustrator", "InDesign", "Logo Design", "Branding"],
      experience: "Intermediate"
    },
    {
      thumbnail: "/thumbnails/Kotteri.png",
      title: "Content Writing",
      daysDelivery: 3,
      pricing: "$150",
      logo: "path/to/logo3.png",
      username: "freelancer3",
      numberOfStars: 4.2,
      numberOfReviews: 200,
      description: "High-quality content writing services for blogs, articles, and websites.",
      skills: ["SEO Writing", "Blogging", "Copywriting", "Editing", "Research"],
      experience: "Intermediate"
    },
    {
      thumbnail: "/thumbnails/Raviel2.png",
      title: "SEO Services",
      daysDelivery: 10,
      pricing: "$400",
      logo: "path/to/logo4.png",
      username: "freelancer4",
      numberOfStars: 4.7,
      numberOfReviews: 95,
      description: "Expert SEO services to improve your website's search engine rankings.",
      skills: ["SEO", "Keyword Research", "Link Building", "Analytics", "Content Strategy"],
      experience: "Advanced"
    }
    
  ]
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExperience, setSelectedExperience] = useState([]);
  const filteredData = blogSchema.filter((service) => {
    const matchesSearchTerm =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.daysDelivery.toString().includes(searchTerm) ||
      service.pricing.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(service.experience);

    return matchesSearchTerm && matchesExperience;
  });
  return (
    <div className='main'>
        <Home toggle={tog}/>
        <TagList onSearch={setSearchTerm} onSearchTerm={searchTerm}/>
        <List listing={filteredData} sSE={setSelectedExperience} SE={selectedExperience}/>
        <Footer />
    </div>
  )
}

export default Main