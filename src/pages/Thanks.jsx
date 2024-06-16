import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import animationData from "../images/thanks.json";

const ThankYouOverlay = ({ show }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClose = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-yellow-500 p-8 rounded-lg shadow-lg text-center relative w-[400px]">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h2 className="text-2xl font-bold mt-4">Little Lemon Restaurant</h2>
        <button
          className="mt-4 bg-gray-700 text-white py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouOverlay;
