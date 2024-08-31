import React, { useState, useEffect } from 'react';

function PaymentSuccessPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="loader mt-3"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Payment Successful!</h2>
        
        <div className="border-b border-gray-300 pb-6 mb-6">
          <p className="text-gray-700 mb-4 text-lg">
            <strong>Payment Summary:</strong>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Amount Paid:</strong> $100
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Paid To:</strong> Sherzybath
          </p>
          <p className="text-gray-700 mb-4">
            <strong>From:</strong> Sid
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reason for Payment</h3>
          <p className="text-gray-700 leading-relaxed">
            I made this payment to Sherzybath as part of the agreed contract for the web development services he provided. Over the last few weeks, he has worked diligently on developing a custom website for my business. The project involved creating a responsive, user-friendly interface, implementing e-commerce functionality, and integrating payment gateways, among other technical tasks.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Work Description</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed a fully responsive website using React.js and Tailwind CSS.</li>
            <li>Integrated a secure payment gateway for seamless transactions.</li>
            <li>Implemented custom features tailored to my business needs.</li>
            <li>Provided ongoing support and maintenance post-launch.</li>
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-300">
          <p className="text-gray-700 mb-4">
            <strong>Note:</strong> This payment marks the successful completion of Phase 1 of the project. We will be collaborating on further phases as the project progresses.
          </p>
          <p className="text-center text-gray-600 text-sm">Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
