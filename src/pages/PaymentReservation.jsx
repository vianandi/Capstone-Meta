import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Address from "../component/component-payment/Address";
import Receipt from "../component/component-payment/Receipt";

const PaymentReservation = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="mt-[120px]"></div>
      <Address />
      <Receipt
        selectedBench={selectedBench}
        floorName={floorName}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </div>
  );
};

export default PaymentReservation;
