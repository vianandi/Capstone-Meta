import React from "react";

const ReceiptFood = ({ cartItems }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += Number(item.price);
    });
    return total;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Order</h2>
      <ul className="mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">IDR {item.price.toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
      <hr className="my-2" />
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Total:</p>
        <p className="text-lg font-semibold">
          IDR {calculateTotal().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ReceiptFood;
