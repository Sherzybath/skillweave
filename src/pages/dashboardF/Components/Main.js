import React from 'react'
import Home from './Home'
import TagList from './TagList'
import List from './List'
import Footer from './Footer'
import { useState } from 'react'
const Main = ({tog, Schema, display}) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExperience, setSelectedExperience] = useState([]);
  
  const filteredData = Schema.filter((service) => {
    const matchesSearchTerm =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.daysDelivery.toString().includes(searchTerm) ||
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
        <List listing={filteredData} sSE={setSelectedExperience} SE={selectedExperience} select={display}/>
        <Footer />
    </div>
  )
}

export default Main