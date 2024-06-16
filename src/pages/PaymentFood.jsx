import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Address from "../component/component-payment/Address";
import ReceiptFood from "../component/component-payment/ReceiptFood";
import Cash from "../images/cash.svg";
import Card from "../images/card.svg";
import Qr from "../images/qr.svg";
import Discount from "../images/discount.svg";
import Tree from "../images/tree.svg";
import Cutlery from "../images/cutlery.svg";
import Bags from "../images/bags.svg";
import Delivery from "../images/delivery.svg";
import ThankYouOverlay from "../pages/Thanks";

const PaymentFood = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [additionalCosts, setAdditionalCosts] = useState({
    tree: false,
    cutlery: false,
    bags: false,
  });

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += Number(item.price);
    });
    if (additionalCosts.tree) total += 5000;
    if (additionalCosts.bags) total += 5000;
    total -= discount; // Apply discount
    return total;
  };

  if (!cartItems || cartItems.length === 0) {
    return <div>No items found in cart.</div>;
  }

  const handlePayment = () => {
    setShowThankYou(true);
  };

  const toggleCost = (costType) => {
    setAdditionalCosts((prevState) => ({
      ...prevState,
      [costType]: !prevState[costType],
    }));
  };

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

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg p-4 w-full max-w-2xl mt-20 ">
          <Address />
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <img src={Delivery} alt="Delivery" className="h-6 w-6 mr-2" />
              Delivery
            </h2>
            <ReceiptFood cartItems={cartItems} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Payment Method</h2>
            <button
              className={`w-full py-2 rounded-lg flex items-center justify-center gap-5 mb-2 ${
                selectedPaymentMethod === "Cash"
                  ? "bg-yellow-500 text-white"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
              onClick={() => handlePaymentMethodSelect("Cash")}
            >
              <img src={Cash} alt="Cash" className="h-6 w-6" />
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
              <img src={Card} alt="Bank" className="h-6 w-6" />
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
              <img src={Qr} alt="QRIS" className="h-6 w-6" />
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
                  Promo applied! You save IDR 10.000
                </p>
              )}
              {promoCode && promoCode !== "VIANGGWP" && (
                <p className="text-red-500 mt-2">Invalid promo code</p>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Environmentally Friendly</h2>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={Tree} alt="Tree" className="h-6 w-6 mr-2" />
                <div>
                  <p>
                    Plant a Tree{" "}
                    <span className="text-[11px] text-[#F79A24]">
                      IDR 5.000,00
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Your donation will be used to plant trees in reforested
                    forests
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={additionalCosts.tree}
                onChange={() => toggleCost("tree")}
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={Cutlery} alt="Cutlery" className="h-6 w-6 mr-2" />
                <div>
                  <p>No cutlery</p>
                  <p className="text-gray-600 text-sm">
                    Thank you for reducing plastic
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={additionalCosts.cutlery}
                onChange={() => toggleCost("cutlery")}
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={Bags} alt="Bags" className="h-6 w-6 mr-2" />
                <div>
                  <p>
                    Reusable Bags{" "}
                    <span className="text-[11px] text-[#F79A24]">
                      {" "}
                      IDR 5.000,00
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Reusable shopping bags
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={additionalCosts.bags}
                onChange={() => toggleCost("bags")}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-lg font-semibold">Total Payment:</p>
            <p className="text-lg font-semibold">
              IDR {calculateTotal().toLocaleString()}
            </p>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-semibold">Discount:</p>
              <p className="text-sm font-semibold text-green-500">
                - IDR {discount.toLocaleString()}
              </p>
            </div>
          )}
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white py-2 px-4 rounded-lg w-full"
          >
            Order
          </button>
        </div>
      </div>
      <ThankYouOverlay
        show={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </>
  );
};

export default PaymentFood;
