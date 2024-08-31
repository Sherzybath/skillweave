import Fork from "./Fork"
import { useState } from "react";
import ClientA from "./ClientA"
import ClientB from "./ClientB"
import FreelancerA from "./FreelancerA"
import FreelancerB from "./FreelancerB";
import FreelancerC from "./FreelancerC"
import { Link, useNavigate } from "react-router-dom";
function Process() {
    const [currentComponent, setCurrentComponent] = useState('Fork');

    const handleSubmit = (option) => {
      if (option === 'A') {
      setCurrentComponent('ClientA');
      } else if (option === 'B') {
      setCurrentComponent('FreelancerA');
      }
    };

    const handleNext = () => {
        if (currentComponent === 'ClientA') {
        setCurrentComponent('ClientB');
        } else if (currentComponent === 'ClientB') {
        
        } else if (currentComponent === 'FreelancerA') {
        setCurrentComponent('FreelancerB');
        } else if (currentComponent === 'FreelancerB') {
          setCurrentComponent('FreelancerC');
        }
    };

    // CLIENT A
    // CLIENT A
    // CLIENT A
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [price, setPrice] = useState('');

    // CLIENT B
    // CLIENT B
    // CLIENT B
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [description, setDescription] = useState(''); 
    // CLIENT SUBMIT  
    // CLIENT SUBMIT  
    // CLIENT SUBMIT  

    const handleJobSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8080/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            experience: experience,
            price: price,
            description: description,
            tags: selectedSkills
          }),
        });
        const data = await response.json();
        console.log('Response from server:', data);
        if (response.ok) {
          // If login is successful, navigate to the dashboard or home page
          navigate('/2'); // or navigate('/home') as per your routing
        } else {
          // If the server returns an error, display the specific error message
          alert(data.error || 'Login failed. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      }
    };
  return (
    <div className="ProcessContainer">
    {currentComponent === 'Fork' && <Fork onSubmit={handleSubmit} />}
      {currentComponent === 'FreelancerA' && <FreelancerA onNext={handleNext} />}
      {currentComponent === 'FreelancerB' && <FreelancerB onNext={handleNext} />}
      {currentComponent === 'FreelancerC' && <FreelancerC onNext={handleNext} />}
      {currentComponent === 'ClientA' && <ClientA onNext={handleNext} title={title} setTitle={setTitle} price={price} setPrice={setPrice} setExperience={setExperience}/>}
      {currentComponent === 'ClientB' && <ClientB onSubmit={handleJobSubmit} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} description={description} setDescription={setDescription}/>}
    </div>
  )
}

export default Process