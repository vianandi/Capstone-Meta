import React, { useContext } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const MenuOverlay = ({ item, onClose }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-4 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        ></button>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <p className="text-orange-500 font-semibold text-lg mb-4">
          IDR {item.price}
        </p>
        <div className="flex justify-between mb-4">
          <button className="flex items-center space-x-2">
            <FaHeart />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-2">
            <FaShareAlt />
            <span>Share</span>
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuOverlay;
