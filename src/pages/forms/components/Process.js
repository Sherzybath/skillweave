import Fork from "./Fork"
import { useState } from "react";
import ClientA from "./ClientA"
import ClientB from "./ClientB"
import FreelancerA from "./FreelancerA"
import FreelancerB from "./FreelancerB";
import FreelancerC from "./FreelancerC"
import { Link, useNavigate } from "react-router-dom";
function Process({username}) {
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
      // console.log({
      //   username,
      //   title,
      //   experience,
      //   price,
      //   selectedSkills,
      //   description

      // })
      try {
        const response = await fetch('http://localhost:8080/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: username,
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

    // FREELANCER A
    // FREELANCER A
    // FREELANCER A
    const [selectedExperience, setSelectedExperience] = useState('');
    // FREELANCER B
    // FREELANCER B
    // FREELANCER B
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [resume, setResume] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    // FREELANCER C
    // FREELANCER C
    // FREELANCER C
    const [titleFree, setTitleFree] = useState('');
    const [descriptionFree, setDescriptionFree] = useState('');
    const [priceFree, setPriceFree] = useState('');
    const [duration, setDuration] = useState('');
    const [skills, setSkills] = useState([]);
    // SUBMIT
    // SUBMIT
    // SUBMIT
    const handleFreeSubmit = async (event) => {
      event.preventDefault();
      console.log({
        selectedExperience,
        profilePhoto,
        resume,
        thumbnail,
        titleFree,
        priceFree,
        duration,
        skills,

      })
      try {
        const response = await fetch('http://localhost:8080/freelance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            title: titleFree,
            experience: selectedExperience,
            pricing: priceFree,
            description: descriptionFree,
            skills: skills,
            daysDelivery: duration,
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
      {currentComponent === 'FreelancerA' && <FreelancerA onNext={handleNext} selectedOption={selectedExperience} setSelectedOption={setSelectedExperience}/>}
      {currentComponent === 'FreelancerB' && <FreelancerB onNext={handleNext} profilePhoto={profilePhoto} setProfilePhoto={setProfilePhoto} resume={resume} thumbnail={thumbnail} setResume={setResume} setThumbnail={setThumbnail}/>}
      {currentComponent === 'FreelancerC' && <FreelancerC onNext={handleNext} title={titleFree} setTitle={setTitleFree} description={descriptionFree} setDescription={setDescriptionFree} price={priceFree} setPrice={setPriceFree} duration={duration} setDuration={setDuration} onSubmit={handleFreeSubmit} skills={skills} setSkills={setSkills}/>}
      {currentComponent === 'ClientA' && <ClientA onNext={handleNext} title={title} setTitle={setTitle} price={price} setPrice={setPrice} setExperience={setExperience}/>}
      {currentComponent === 'ClientB' && <ClientB onSubmit={handleJobSubmit} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} description={description} setDescription={setDescription}/>}
    </div>
  )
}

export default Process