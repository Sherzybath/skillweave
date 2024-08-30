import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'; // Importing icons from react-icons
function Dropdown() {
    const [isPricingOpen, setPricingOpen] = useState(true);
    const togglePricing = () => {
        setPricingOpen(!isPricingOpen);
      };
  return (
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
            {['< 100', 'Intermediate', 'Advanced'].map((level) => (
              <label key={level} className="block p-2 hover:bg-[#fff4f0] cursor-pointer flex items-center text-[#16413f]">
                <input
                  type="checkbox"
                //   checked={selectedExperience.includes(level)}
                //   onChange={() => handleExperienceSelect(level)}
                  className="mr-2 bg-[#133b3a] border-[#133b3a] text-[#18544c]"
                />
                {level}
              </label>
            ))}
          </div>
          
        )}
      </div>
  )
}

export default Dropdown