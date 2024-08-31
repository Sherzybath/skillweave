import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

function ClientB({onSubmit, selectedSkills, setSelectedSkills, description, setDescription}) {
  
  const [isSkillsOpen, setIsSkillsOpen] = useState(true); // Open by default

  // Handle Skills selection
  const handleSkillSelect = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };

  // Validate description
  const validateDescription = () => {
    if (description.trim().length < 100 || description.trim().length > 500) {
      return '**Description must be between 100 and 500 words.**';
    }
    return '';
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-[#faf3e3] max-w-lg mx-auto">
      {/* Step indicator */}
      <p className="text-3xl font-semibold ">2/2</p>

      {/* Container for skills and description */}
      <div className="w-full p-6 border border-gray-300 rounded-md bg-[#16413f] shadow-sm space-y-6">
        {/* Skills Dropdown */}
        <div className="w-full">
          <button
            className="flex justify-between items-center w-full text-left p-3 bg-[#faf3e3] border border-gray-300 rounded-md shadow-sm hover:bg-[#eaeaea]"
            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
          >
            <span className="text-lg font-semibold">Your Adapt Skills</span>
            <span className="text-xl">
              {isSkillsOpen ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </button>
          {isSkillsOpen && (
            <div className="mt-2 bg-[#faf3e3] border border-gray-300 rounded-md shadow-sm w-full">
              {[
                'Web Development',
                'Mobile Development',
                'UI/UX Developer',
                'Graphic Designing',
                'Video Editing',
              ].map((skill) => (
                <label
                  key={skill}
                  className="block p-3 hover:bg-[#eaeaea] cursor-pointer flex items-center text-[#16413f]"
                >
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleSkillSelect(skill)}
                    className="mr-3 h-5 w-5 rounded border-gray-300 bg-[#133b3a] focus:ring-[#18544c] custom-checkbox"
                  />
                  {skill}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Description Input */}
        <div className="w-full">
          <label className="block font-semibold text-xl mb-1 text-[#faf3e3]">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border bg-[#faf3e3] border-gray-300 rounded-md text-[#133b3a]"
            placeholder="Enter the project description"
            rows="6"
          ></textarea>
          <p className="text-[#faf3e3] text-sm mt-1">
            {validateDescription()}
          </p>
        </div>
      </div>

      {/* Message and Submit Button */}
      <div className="w-full text-center">
        <p className="text-[#16413f] font-semibold text-3xl">You are good to go now!</p>
        <button
          type="submit"
          className="mt-4 px-6 py-2 text-2xl bg-[#16413f] text-white rounded-md shadow-sm hover:bg-[#18544c]"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ClientB;
