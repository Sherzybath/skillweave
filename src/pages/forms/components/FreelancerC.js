import React, { useState } from 'react';

function FreelancerC({title, setTitle, description, setDescription, price, setPrice, duration, setDuration, onSubmit, skills, setSkills}) {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState('');
  // const [duration, setDuration] = useState('');
  // const [skills, setSkills] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const allSkills = ['Web Development','App Development','Image Editing','Video Editing'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSkillChange = (skill) => {
    setSkills(prevSkills => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter(s => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
  };

  const validateForm = () => {
    let formErrors = {};

    // Title validation
    const wordCount = title.trim().split(/\s+/).length;
    if (wordCount < 2 || wordCount > 20) {
      formErrors.title = '**Title must be between 2 and 20 words.**';
    }

    // Description validation
    if (description.trim().length < 100 || description.trim().length > 500) {
      formErrors.description = '**Description must be between 100 and 500 words.**';
    }

    // Price validation
    if (isNaN(price) || price <= 0) {
      formErrors.price = '**Price must be a positive number.**';
    }

    // Duration validation
    if (isNaN(duration) || duration <= 0) {
      formErrors.duration = '**Duration must be a positive number.**';
    }

    // Skills validation (optional)
    if (skills.length === 0) {
      formErrors.skills = '**Please select at least one skill.**';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     // Form submission logic goes here, e.g., send data to server
  //     console.log('Form submitted:', { title, description, price, duration, skills });
  //   } else {
  //     console.log('Form has errors.');
  //   }
  // };

  return (
    <div className="flex flex-col items-center space-y-6 bg-[#faf3e3] max-w-lg mx-auto">
      {/* Progress Indicator */}
      <div className="text-[#133b3a] text-3xl font-bold">3/3</div>

      {/* Form Container */}
      <div className="w-full flex flex-col space-y-4 p-6 bg-[#133b3a] text-[#faf3e3] rounded-md">
        {/* Title Input */}
        <div>
          <label className="block font-semibold mb-1 text-[#faf3e3]">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border bg-[#faf3e3] border-[#133b3a] rounded-md text-[#133b3a]"
            placeholder="Enter the project title"
          />
          {errors.title && <p className="text-[#faf3e3] text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Skills Dropdown with Checkboxes */}
        <div className="relative">
          <label className="block font-semibold mb-1 text-[#faf3e3]">Skills</label>
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full p-2 border bg-[#faf3e3] border-[#133b3a] rounded-md text-[#9ca4ac] text-left"
          >
            Select Skills
          </button>
          {dropdownOpen && (
            <div className="absolute w-full bg-[#faf3e3] border border-[#133b3a] rounded-md mt-1 z-10">
              {allSkills.map((skill) => (
                <div key={skill} className="p-2 flex items-center">
                  <input
                    type="checkbox"
                    checked={skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    id={skill}
                    className="mr-2"
                  />
                  <label htmlFor={skill} className="text-[#133b3a]">{skill}</label>
                </div>
              ))}
            </div>
          )}
          {errors.skills && <p className="text-[#faf3e3] text-sm mt-1">{errors.skills}</p>}
        </div>

        {/* Description Input */}
        <div>
          <label className="block font-semibold mb-1 text-[#faf3e3]">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border bg-[#faf3e3] border-gray-300 rounded-md text-[#133b3a]"
            placeholder="Enter the project description"
            rows="6"
          ></textarea>
          {errors.description && (
            <p className="text-[#faf3e3] text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Price Input */}
        <div>
          <label className="block font-semibold mb-1 text-[#faf3e3]">Price per Project</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#133b3a]">$</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full pl-8 p-2 border border-gray-300 bg-[#faf3e3] rounded-md text-[#133b3a]"
              placeholder="Enter the price"
            />
          </div>
          {errors.price && <p className="text-[#faf3e3] text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Duration Input */}
        <div>
          <label className="block font-semibold mb-1 text-[#faf3e3]">Duration (Days)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-[#faf3e3] text-[#133b3a]"
            placeholder="Enter the duration in days"
          />
          {errors.duration && <p className="text-[#faf3e3] text-sm mt-1">{errors.duration}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="text-[#133b3a] text-3xl font-bold">You are good to go now!</div>

      {/* Submit Button */}
      <button
        className="bg-[#133b3a] text-2xl py-2 px-4 rounded-md mt-4 text-[#faf3e3]"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default FreelancerC;
