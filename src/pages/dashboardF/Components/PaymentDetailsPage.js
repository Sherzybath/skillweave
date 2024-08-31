import React, { useState } from "react";
import razorpayLogo from '../Assets/razer.png';
import visalogo from '../Assets/visa.png';

const PaymentDetailsPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryError, setExpiryError] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    const inputDate = e.target.value;
    setExpiryDate(inputDate);

    // Validate expiry date (after 09/2024)
    const [month, year] = inputDate.split("/");
    if (parseInt(year, 10) < 2024 || (parseInt(year, 10) === 2024 && parseInt(month, 10) < 9)) {
      setExpiryError("Expiry date is invalid. Please enter a date after 09/2024.");
    } else {
      setExpiryError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here (e.g., payment processing)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-sm text-gray-700 mb-2">Amount payable is</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">₹3.06</h3>

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
            {cardNumber === "4871 0499 9999 9910" && (
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

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            PAY NOW
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
