import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import razorpayLogo from '../Assets/razer.png';
import visalogo from '../Assets/visa.png';

const PaymentDetailsPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [amount, setAmount] = useState("3.06"); // Initialize with a default amount
  const [expiryError, setExpiryError] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const navigate = useNavigate();

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    const inputDate = e.target.value;
    setExpiryDate(inputDate);

    // Validate expiry date format MM/YY
    const regex = /^(0[1-9]|1[0-2])\/(2[4-9]|[3-9][0-9])$/;
    if (!regex.test(inputDate)) {
      setExpiryError("Expiry date must be in MM/YY format and valid.");
    } else {
      setExpiryError("");
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!cardNumber || !expiryDate || !cvv || !cardholderName || !amount) {
      setFormError("All fields are required.");
      return;
    }

    // Clear form error
    setFormError("");

    // Set loading state to true
    setLoading(true);

    try {
      // Simulate form submission (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

      // Redirect to OTP page
      navigate('/otp');
    } catch (error) {
      // Handle any errors
      setFormError("An error occurred. Please try again.");
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="flex items-center space-x-2">
        <svg
          className="animate-spin h-8 w-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            d="M4 12a8 8 0 0116 0"
          ></path>
        </svg>
        <span className="text-white text-lg">Loading...</span>
      </div>
    </div>
  );

  if (loading) {
    return <LoadingScreen />; // Render loading screen while loading
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-sm text-gray-700 mb-2">Amount payable is</h2>
        
        {/* Container for the amount input */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-2xl">$</span>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full pl-10 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 text-2xl font-semibold"
            placeholder="Enter amount"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <h4 className="text-lg font-medium text-gray-700 mb-4">Pay with Credit/Debit Card</h4>

          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Card Number"
            />
            {cardNumber && cardNumber.length >= 8 && (
              <img
                src={visalogo}
                alt="Visa"
                className="absolute right-3 top-10 w-12"
              />
            )}
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="MM / YY"
              />
              {expiryError && <p className="text-red-500 text-sm">{expiryError}</p>}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="password"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="*"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardholderName">
              Cardholder's Name
            </label>
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Cardholder's Name"
            />
          </div>

          {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    d="M4 12a8 8 0 0116 0"
                  ></path>
                </svg>
              </div>
            ) : (
              "PAY NOW"
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs mt-5">Powered by</p>
          <img
            src={razorpayLogo}
            alt="Razorpay"
            className="mx-auto"
            width="100"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
