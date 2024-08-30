import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Icons for file types
// import './styles.css'; // Import your CSS file

function FreelancerB({ onNext }) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

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

  // Handle file upload for thumbnail
  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png'];
      if (validImageTypes.includes(file.type)) {
        setThumbnail(URL.createObjectURL(file)); // Create a URL for the selected file
      } else {
        console.log('Please upload a thumbnail in JPEG or PNG format.');
        document.getElementById('thumbnail-input').value = ''; // Reset the input
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

  // Clear the thumbnail
  const handleClearThumbnail = () => {
    setThumbnail(null); // Clear the file
    document.getElementById('thumbnail-input').value = ''; // Reset the input
  };

  // Clear the resume
  const handleClearResume = () => {
    setResume(null); // Clear the file
    document.getElementById('resume-input').value = ''; // Reset the input
  };

  // Handle Next button click
  const handleNext = () => {
    onNext(); // Proceed to the next step if an option is selected
  };

  return (
    <div className="flex flex-col items-center space-y-6 bg-[#faf3e3]">
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

          {/* Thumbnail Upload */}
          <div className="w-full max-w-xs flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#faf3e3] text-center">
              Upload Your Thumbnail
            </h2>
            <div className="relative w-32 h-32 border-4 border-dashed border-[#133b3a] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100">
              <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                id="thumbnail-input"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <label
                htmlFor="thumbnail-input"
                className="flex flex-col items-center justify-center w-full h-full text-gray-500"
              >
                {thumbnail ? (
                  <>
                    <img
                      src={thumbnail}
                      alt="Thumbnail Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={handleClearThumbnail}
                      className="absolute top-2 right-2 p-1 bg-[#133b3a] rounded-full text-gray-600 hover:bg-gray-400"
                    >
                      ×
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl text-[#133b3a]">+</span>
                    <p className="text-sm text-[#133b3a]">Upload Thumbnail</p>
                  </div>
                )}
              </label>
            </div>
            <div className="mt-2 text-[#faf3e3] text-center">
              {thumbnail ? 'Uploaded' : 'No thumbnail uploaded'}
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
        </div>
      </div>
      {/* Progress Message */}
      <div className="bottom-section">
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>
  );
}

export default FreelancerB;

