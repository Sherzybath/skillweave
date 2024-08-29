import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Icons for file types
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'; // Icons for dropdown
// import './styles.css'; // Import your CSS file

function FreelancerB({onNext}) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  // Handle file upload for profile photo
  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png'];
      if (validImageTypes.includes(file.type)) {
        setProfilePhoto(URL.createObjectURL(file)); // Create a URL for the selected file
      } else {
        console.log('Please upload a photo in JPEG or PNG format.');
        document.getElementById('profile-photo-input').value = ''; // Reset the input
      }
    }
  };

  // Handle file upload for resume
  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validResumeTypes = ['application/pdf'];
      if (validResumeTypes.includes(file.type)) {
        setResume(file); // Store the resume file object
      } else {
        console.log('Please upload your resume in PDF format.');
        document.getElementById('resume-input').value = ''; // Reset the input
      }
    }
  };

  // Clear the profile photo
  const handleClearProfilePhoto = () => {
    setProfilePhoto(null); // Clear the file
    document.getElementById('profile-photo-input').value = ''; // Reset the input
  };

  // Clear the resume
  const handleClearResume = () => {
    setResume(null); // Clear the file
    document.getElementById('resume-input').value = ''; // Reset the input
  };

  // Handle Skills dropdown toggle
  const toggleSkills = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };

  // Handle Skills selection
  const handleSkillSelect = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };

  // Handle Next button click
  const handleNext = () => {
 
      onNext(); // Proceed to the next step if an option is selected

  };

  return  (
    <div className="flex flex-col items-center p-6 space-y-6 bg-[#faf3e3]">
      {/* Progress Indicator */}
      <div className="progress-indicator flex justify-center items-center mb-0">
        <p className="progress-text text-[#133b3a] text-lg font-semibold">2/3</p>
      </div>
      <div className="w-full max-w-lg p-6 border border-gray-200 rounded-lg shadow-lg bg-[#133b3a] text-[#faf3e3]">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Photo Upload */}
          <div className="w-full max-w-xs flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#faf3e3] text-center">
              Upload Your Profile Photo
            </h2>
            <div className="relative w-32 h-32 border-4 border-dashed border-[#133b3a] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                id="profile-photo-input"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <label
                htmlFor="profile-photo-input"
                className="flex flex-col items-center justify-center w-full h-full text-gray-500"
              >
                {profilePhoto ? (
                  <>
                    <img
                      src={profilePhoto}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={handleClearProfilePhoto}
                      className="absolute top-2 right-2 p-1 bg-[#133b3a] rounded-full text-gray-600 hover:bg-gray-400"
                    >
                      ×
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl text-[#133b3a]">+</span>
                    <p className="text-sm text-[#133b3a]">Upload Photo</p>
                  </div>
                )}
              </label>
            </div>
            <div className="mt-2 text-[#faf3e3] text-center">
              {profilePhoto ? 'Uploaded' : 'No photo uploaded'}
            </div>
          </div>

          {/* Resume Upload */}
          <div className="w-full max-w-xs flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#faf3e3] text-center">
              Upload Your Resume
            </h2>
            <div className="relative w-32 h-32 border-4 border-dashed border-[#133b3a] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100">
              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeChange}
                id="resume-input"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <label
                htmlFor="resume-input"
                className="flex flex-col items-center justify-center w-full h-full text-gray-500"
              >
                {resume ? (
                  <div className="flex items-center justify-center w-full h-full">
                    <FaFilePdf className="text-red-600 text-4xl" />
                    <button
                      onClick={handleClearResume}
                      className="absolute top-2 right-2 p-1 bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl text-[#133b3a]">+</span>
                    <p className="text-sm text-[#133b3a]">Upload Resume</p>
                  </div>
                )}
              </label>
            </div>
            <div className="mt-2 text-[#faf3e3] text-center">
              {resume ? 'Uploaded' : 'No resume uploaded'}
            </div>
          </div>

          {/* Skills Dropdown */}
          <div className="w-full max-w-xs mt-4 flex flex-col items-center">
            <button
              className="flex justify-between items-center w-full text-left p-3 bg-[#f7f7f7] border border-gray-300 rounded-md shadow-sm hover:bg-[#eaeaea]"
              onClick={toggleSkills}
            >
              <span className="text-lg font-semibold">Your Adapt Skills</span>
              <span className="text-xl">
                {isSkillsOpen ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {isSkillsOpen && (
              <div className="mt-2 bg-[#f7f7f7] border border-gray-300 rounded-md shadow-sm w-full">
                {[
                  'Web Development',
                  'Mobile Development',
                  'UI/UX Developer',
                  'Graphic Designing',
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
        </div>
        <div className="bottom-section mt-6 flex justify-center">
          <hr className="divider w-full border-gray-300" />
          <button onClick={handleNext} className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Next
          </button>  
          </div>
      </div>
      {/* Progress Message */}
      <div className="mt-6 text-3xl text-[#133b3a] font-semibold ">
        Just 1 more step!
      </div>
    </div>
  );
}

export default FreelancerB;
