import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpVerificationPage() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="loader mt-3 right-4 "></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Enter OTP</h2>
        <p className="text-sm text-red-500 mb-4">
          OTP is confidential. Do not share your OTP with anyone.
        </p>
        <form>
          <div className="relative mb-6">
            <label className="block text-gray-700">OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              placeholder="*****"
              maxLength="5"
              style={{ fontFamily: 'monospace', letterSpacing: '0.25em' }} // Adjust spacing for visual effect
            />
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                color: 'transparent',
                letterSpacing: '0.25em',
                fontFamily: 'monospace',
              }}
            >
              {otp.replace(/./g, '*')} {/* Display as asterisks */}
            </div>
          </div>
          <button
            type="button"
            onClick={handleVerify}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
