import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'; // Importing icons from react-icons

function FilterDialog({ selectedExperience, setSelectedExperience }) {
  const [isExperienceOpen, setExperienceOpen] = useState(true); // Set to true to initially open

  const toggleExperience = () => {
    setExperienceOpen(!isExperienceOpen);
  };

  const handleExperienceSelect = (level) => {
    setSelectedExperience((prev) =>
      prev.includes(level) ? prev.filter((item) => item !== level) : [...prev, level]
    );
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
    </div>
  );
}

export default FilterDialog;
