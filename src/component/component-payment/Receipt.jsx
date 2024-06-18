import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cash from "../../images/cash.svg";
import CardCredit from "../../images/cardcredit.svg";
import qr from "../../images/qr.svg";
import ThankYouOverlay from "../../pages/Thanks";

const Receipt = () => {
  const location = useLocation();
  const { selectedBench, floorName, selectedDate, selectedTime, price } =
    location.state;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePromoCodeApply = () => {
    if (promoCode === "VIANGGWP") {
      setDiscount(10000);
    } else {
      setDiscount(0);
    }
  };

  const handleReservation = () => {
    setShowThankYou(true);
  };

  const totalPayment = price + 5000 - discount; // 5000 is the ordering service fee

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto my-5">
        <h1 className="text-center text-2xl font-bold mb-8">PAYMENT</h1>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Reservation</h2>
          <p className="text-lg">{`${selectedBench.label}, Floor : ${floorName}`}</p>
          <p className="text-lg">{` ${selectedDate.toDateString()} | ${selectedTime}`}</p>
          <div className="text-lg mt-4">
            <p>Fee: IDR {price.toLocaleString()}</p>
            <p>Ordering Service Fees: IDR 5,000.00</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 text-center">
          <h2 className="text-xl font-bold mb-2">Payment Method</h2>
          <button
            className={`w-full py-2 rounded-lg flex items-center justify-center gap-5 mb-2 ${
              selectedPaymentMethod === "Cash"
                ? "bg-yellow-500 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
            onClick={() => handlePaymentMethodSelect("Cash")}
          >
            <img src={Cash} alt="Cash" className="h-[35px]" />
            <span>Cash</span>
          </button>
          <button
            className={`w-full py-2 rounded-lg flex items-center justify-center gap-5 mb-2 ${
              selectedPaymentMethod === "Bank"
                ? "bg-yellow-500 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
            onClick={() => handlePaymentMethodSelect("Bank")}
          >
            <img src={CardCredit} alt="Bank" className="h-[35px]" />
            <span>Bank</span>
          </button>
          <button
            className={`w-full py-2 rounded-lg flex items-center justify-center gap-5 mb-2 ${
              selectedPaymentMethod === "QRIS"
                ? "bg-yellow-500 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
            onClick={() => handlePaymentMethodSelect("QRIS")}
          >
            <img src={qr} alt="QRIS" className="h-[35px]" />
            <span>QRIS</span>
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Use Promos / Vouchers</h2>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter promo code"
              className="w-full border border-gray-300 rounded p-2 mb-2"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              onClick={handlePromoCodeApply}
              className="w-full bg-yellow-500 text-white py-2 rounded-lg"
            >
              Apply Promo Code
            </button>
            {promoCode === "VIANGGWP" && (
              <p className="text-green-500 mt-2">
                Promo applied! You save IDR 10,000.00
              </p>
            )}
            {promoCode && promoCode !== "VIANGGWP" && (
              <p className="text-red-500 mt-2">Invalid promo code</p>
            )}
          </div>
        </div>
        <div className="mt-4 text-lg">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Total Payment:</p>
            <p className="text-lg font-semibold">
              IDR {totalPayment.toLocaleString()}
            </p>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Discount:</p>
              <p className="text-lg font-semibold text-red-500">
                - IDR {discount.toLocaleString()}
              </p>
            </div>
          )}
          <p>You Save: IDR {discount.toLocaleString()}</p>
        </div>
        <button
          className="bg-[#495E57] text-[#F4CE14] py-2 px-4 rounded-lg w-full mt-4"
          onClick={handleReservation}
        >
          Reservation
        </button>
      </div>
      <ThankYouOverlay
        show={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </>
  );
};

export default Receipt;
