import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (cart.length > 0) {
      navigate("/paymentfood", { state: { cartItems: cart } });
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">IDR {item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleProceedToPayment}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg"
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
