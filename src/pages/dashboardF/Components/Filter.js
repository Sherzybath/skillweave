import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'; // Importing icons from react-icons

function FilterDialog({ selectedExperience, setSelectedExperience, selectedSkills, setSelectedSkills, setSelectedPricing , setSelectedDuration}) {
  const [isExperienceOpen, setExperienceOpen] = useState(true); // Set to true to initially open
  const [isPricingOpen, setPricingOpen] = useState(true);
  const [isDurationOpen, setDurationOpen] = useState(true);
  const [isSkillsOpen, setIsSkillsOpen] = useState(true); // Open by default

  const handleDurationSelect = (skill) => {
    setSelectedDuration((prev) =>
      prev.includes(skill)  
        ? prev.filter((item) => item !== skill) : [...prev, skill]
    );
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill) : [...prev, skill]
    );
  };
  const handlePricingSelect = (skill) => {
    setSelectedPricing((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill) : [...prev, skill]
    );
  };
  const handleExperienceSelect = (level) => {
    setSelectedExperience((prev) =>
      prev.includes(level) ? prev.filter((item) => item !== level) : [...prev, level]
    );
  };

  const toggleExperience = () => {
    setExperienceOpen(!isExperienceOpen);
  };
  const togglePricing = () => {
    setPricingOpen(!isPricingOpen);
  };
  const toggleDuration = () => {
    setDurationOpen(!isDurationOpen);
  };

  return (
    <div className="bg-[#18544c] p-6 rounded-lg w-80 shadow-md inline-block">
      <h2 className="text-lg font-semibold mb-4 text-[#fff4f0] text-center">Filter Options</h2>

      {/* Experience Level Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left p-2 bg-[#fff4f0] border border-gray-300 rounded-md"
          onClick={toggleExperience}
        >
          <span>Experience Level</span>
          <span>{isExperienceOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
        </button>
        {isExperienceOpen && (
          <div className="mt-2 bg-[#fff4f0] border border-gray-300 rounded-md">
            {['Entry', 'Intermediate', 'Advanced'].map((level) => (
              <label key={level} className="block p-2 hover:bg-[#fff4f0] cursor-pointer flex items-center text-[#16413f]">
                <input
                  type="checkbox"
                  checked={selectedExperience.includes(level)}
                  onChange={() => handleExperienceSelect(level)}
                  className="mr-2 bg-[#133b3a] border-[#133b3a] text-[#18544c]"
                />
                {level}
              </label>
            ))}
          </div>
          
        )}
      </div>
      {/* Pricing Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left p-2 bg-[#fff4f0] border border-gray-300 rounded-md"
          onClick={togglePricing}
        >
          <span>Pricing</span>
          <span>{isPricingOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
        </button>
        {isPricingOpen && (
          <div className="mt-2 bg-[#fff4f0] border border-gray-300 rounded-md">
            {['less than $50', 'between $50 to $100', 'more than $100'].map((level) => (
              <label key={level} className="block p-2 hover:bg-[#fff4f0] cursor-pointer flex items-center text-[#16413f]">
                <input
                  type="checkbox"

                  onChange={() => handlePricingSelect(level)}
                  className="mr-2 bg-[#133b3a] border-[#133b3a] text-[#18544c]"
                />
                {level}
              </label>
            ))}
          </div>
          
        )}
      </div>
      
      {/* Duration Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left p-2 bg-[#fff4f0] border border-gray-300 rounded-md"
          onClick={toggleDuration}
        >
          <span>Duration</span>
          <span>{isDurationOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
        </button>
        {isDurationOpen && (
          <div className="mt-2 bg-[#fff4f0] border border-gray-300 rounded-md">
            {['less than 3 days', 'between 3 to 7 days', 'more than 7 days'].map((level) => (
              <label key={level} className="block p-2 hover:bg-[#fff4f0] cursor-pointer flex items-center text-[#16413f]">
                <input
                  type="checkbox"
                  onChange={() => handleDurationSelect(level)}
                  className="mr-2 bg-[#133b3a] border-[#133b3a] text-[#18544c]"
                />
                {level}
              </label>
            ))}
          </div>
          
        )}
      </div>
      {/* Adept Skills */}
      <div className="w-full">
          <button
            className="flex justify-between items-center w-full text-left p-2 bg-[#fff4f0] border border-gray-300 rounded-md shadow-sm hover:bg-[#eaeaea]"
            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
          >
            <span>Adept Skills</span>
            <span className="text-xl">
              {isSkillsOpen ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </button>
          {isSkillsOpen && (
            <div className="mt-2 bg-[#fff4f0] border border-gray-300 rounded-md shadow-sm w-full">
              {[
                'Web Development',
                'Mobile Development',
                'UI/UX Developer',
                'Graphic Designing',
                'Video Editing',
                
              ].map((skill) => (
                <label
                  key={skill}
                  className="block p-2 hover:bg-[#fff4f0] cursor-pointer flex items-center text-[#16413f]"
                >
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleSkillSelect(skill)}
                    className="mr-2 bg-[#133b3a] border-[#133b3a] text-[#18544c]"
                  />
                  {skill}
                </label>
              ))}
            </div>
          )}
        </div>
    </div>
  );
}

export default FilterDialog;
