import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'; // Importing icons from react-icons

function FilterDialog() {
  const [isExperienceOpen, setExperienceOpen] = useState(true); // Set to true to initially open
  const [isProjectLengthOpen, setProjectLengthOpen] = useState(true); // Set to true to initially open

  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedProjectLength, setSelectedProjectLength] = useState([]);

  const toggleExperience = () => {
    setExperienceOpen(!isExperienceOpen);
  };

  const toggleProjectLength = () => {
    setProjectLengthOpen(!isProjectLengthOpen);
  };

  const handleExperienceSelect = (level) => {
    setSelectedExperience(prev =>
      prev.includes(level) ? prev.filter(item => item !== level) : [...prev, level]
    );
  };

  const handleProjectLengthSelect = (length) => {
    setSelectedProjectLength(prev =>
      prev.includes(length) ? prev.filter(item => item !== length) : [...prev, length]
    );
  };

  const displaySelected = (selectedArray) => {
    return selectedArray.length > 0 ? selectedArray.join(', ') : 'Select';
  };

  return (
    <div className="bg-[#18544c] p-6 rounded-lg w-80 shadow-md inline-block ">
      <h2 className="text-lg font-semibold mb-4 text-[#fff4f0]">Filter Options</h2>

      {/* Experience Level Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left p-2 bg-[#fff4f0] border border-gray-300 rounded-md "
          onClick={toggleExperience}
        >
          <span>Experience Level</span>
          <span>{isExperienceOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
        </button>
        {isExperienceOpen && (
          <div className="mt-2 bg-[#fff4f0] border border-gray-300 rounded-md">
            {['Entry Level', 'Intermediate Level', 'Advanced Level'].map(level => (
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

      {/* Project Length Filter */}
      <div>
        <button
          className="flex justify-between items-center w-full text-left p-2 bg-[#fff4f0] border border-gray-300 rounded-md"
          onClick={toggleProjectLength}
        >
          <span>Project Length</span>
          <span>{isProjectLengthOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
        </button>
        {isProjectLengthOpen && (
          <div className="mt-2 bg-[#fff4f0] border border-gray-300 rounded-md">
            {['Less than 1 month', '1 to 3 months', '3 to 6 months', 'More than 6 months'].map(length => (
              <label key={length} className="block p-2 hover:bg-[#fff4f0] cursor-pointer flex items-center text-[#16413f]">
                <input
                   type="checkbox"
                  checked={selectedProjectLength.includes(length)}
                  onChange={() => handleProjectLengthSelect(length)}
                  className="mr-2 h-4 w-4 rounded appearance-none bg-[#133b3a] border-[#133b3a]    focus:ring-[#18544c] flex-shrink-0 custom-checkbox"
                  />
                {length}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterDialog;
