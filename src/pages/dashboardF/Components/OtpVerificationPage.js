import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpVerificationPage() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    if (otp === '12345') { // Simulate OTP verification
      navigate('/success');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Enter OTP</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700">OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter OTP"
            />
          </div>
          <button
            type="button"
            onClick={handleVerify}
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
