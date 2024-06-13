import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Receipt from "../component/component-payment/Receipt";
import Address from "../component/component-payment/address";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBench, floorName, selectedDate, selectedTime } =
    location.state || {};

  if (!selectedBench) {
    return <div>No reservation details found.</div>;
  }

  const handlePayment = () => {
    // Logic for handling payment
    navigate("/confirmation"); // Redirect to a confirmation page or any other page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-center text-2xl font-bold mb-8">Payment Details</h1>
        <div className="mb-4">
          <p className="text-lg">Floor: {floorName}</p>
          <p className="text-lg">Bench: {selectedBench.label}</p>
          <p className="text-lg">Date: {selectedDate.toDateString()}</p>
          <p className="text-lg">Time: {selectedTime}</p>
          <p className="text-lg">Price: IDR 150,000.00</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Payment Options</h2>
          {/* Add your payment options here */}
        </div>
        <button
          onClick={handlePayment}
          className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
