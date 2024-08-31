import React, { useState, useEffect } from 'react';

// Title Component
const Title = ({ title, onChange, error }) => {
  return (
    <div className="title-container mb-4">
      <label className="block font-semibold mb-1 text-[#faf3e3] text-xl">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-[#133b3a] rounded-md bg-[#faf3e3] text-[#133b3a]"
        placeholder="Enter the project title"
      />
      {error && <p className="text-[#faf3e3] text-sm mt-1">{error}</p>}
    </div>
  );
};

// Experience Component
const Experience = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  

  return (
    <div className="experience-container mb-4">
      <h2 className="text-xl font-semibold text-[#faf3e3] mb-2">Experience Level</h2>
      <div className="options flex space-x-4">
        <div
          className={`option p-4 border rounded-md cursor-pointer ${
            selectedOption === 'Beginner' ? 'bg-[#faf3e3]' : 'bg-[#133b3a]'
          }`}
          onClick={() => handleOptionChange('Beginner')}
        >
          <p
            style={{
              color: selectedOption === 'Beginner' ? '#133b3a' : '#faf3e3',
            }}
          >
            Beginner
          </p>
        </div>
        <div
          className={`option p-4 border rounded-md cursor-pointer ${
            selectedOption === 'Intermediate' ? 'bg-[#faf3e3]' : 'bg-[#133b3a]'
          }`}
          onClick={() => handleOptionChange('Intermediate')}
        >
          <p
            style={{
              color: selectedOption === 'Intermediate' ? '#133b3a' : '#faf3e3',
            }}
          >
            Intermediate
          </p>
        </div>
        <div
          className={`option p-4 border rounded-md cursor-pointer ${
            selectedOption === 'Advanced' ? 'bg-[#faf3e3]' : 'bg-[#133b3a]'
          }`}
          onClick={() => handleOptionChange('Advanced')}
        >
          <p
            style={{
              color: selectedOption === 'Advanced' ? '#133b3a' : '#faf3e3',
            }}
          >
            Advanced
          </p>
        </div>
      </div>
    </div>
  );
};

// Price Component
const Price = ({ price, onChange }) => {
  return (
    <div className="price-container mb-4">
      <label className="block font-semibold mb-1 text-[#faf3e3] text-xl">Price per Project</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#133b3a]">$</span>
        <input
          type="number"
          value={price}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-8 p-2 border border-[#133b3a] bg-[#faf3e3] rounded-md text-[#133b3a]"
          placeholder="Enter the price"
        />
      </div>
    </div>
  );
};

// ClientA Component
const ClientA = ({onNext, title, setTitle, price, setPrice, setExperience}) => {
  const [titleError, setTitleError] = useState('');
  
  useEffect(() => {
    const wordCount = title.trim().split(/\s+/).length;
    if (wordCount < 2 || wordCount > 20) {
      setTitleError('**Title must be greater than 2 words and less than 20 words.**');
    } else {
      setTitleError('');
    }
  }, [title]);

  const handleNext = () => {
      onNext(); 
    
  };

  return (
    <div className="flex flex-col items-center  bg-[#faf3e3] min-h-screen">
      {/* Progress Indicator */}
      <p className="font-semibold text-[#133b3a] mb-4 text-3xl">1/2</p>

      {/* Container */}
      <div className="w-full max-w-xl bg-[#133b3a] p-8 rounded-md shadow-md">
        {/* Title Component */}
        <Title title={title} onChange={setTitle} error={titleError} />

        {/* Experience Component */}
        <Experience onNext={setExperience} />

        {/* Price Component */}
        <Price price={price} onChange={setPrice} />
      </div>

      {/* Next Button */}
      <div className="w-full text-center">
        <p className="text-[#133b3a] font-semibold text-3xl mt-8 mb-4">Few More Questions To Make Your Profile!</p>
      </div>

      <button
        onClick={handleNext}
        className="mt-4 w-28 text-2xl p-2 bg-[#133b3a] text-[#faf3e3] font-semibold rounded-md "
      >
        Next
      </button>
    </div>
  );
};

export default ClientA;
  