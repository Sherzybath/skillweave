import React, { useState } from 'react';

const FreelanceQuiz = ({ onNext, selectedOption, setSelectedOption}) => {
 

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext(); // Proceed to the next step if an option is selected
    } else {
      alert('Please select an option.'); // Show alert if no option is selected
    }
  };

  return (
    <div className="quiz-wrapper">
      <div className='upper-section'><div className="progress-indicator">
        <p className="progress-text">1/3</p> {/* Progress indicator */}
      </div>
      <div className="quiz-container">
        <h2 className="quiz-question">A few quick questions: first, have you freelanced before?</h2>
        <p className="quiz-description">
          This lets us know how much help to give you along the way. We won’t share your answer with anyone else, including potential clients.
        </p>
        <div className="options">
          <div
            className={`option ${selectedOption === 'Beginner' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('Beginner')}
          >
            <p style={{
              color: selectedOption === 'Beginner' ? '#133b3a' : '#fff4f0',
            }}>Beginner</p>
          </div>
          <div
            className={`option ${selectedOption === 'Intermediate' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('Intermediate')}
          >
            <p style={{
              color: selectedOption === 'Intermediate' ? '#133b3a' : '#fff4f0',
            }}>Intermediate</p>
          </div>
          <div
            className={`option ${selectedOption === 'Advanced' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('Advanced')}
          >
            <p style={{
              color: selectedOption === 'Advanced' ? '#133b3a' : '#fff4f0',
            }}>Advanced</p>
          </div>
        </div>
      </div></div>
      
      
      <div className="bottom-section">
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default FreelanceQuiz;
