import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const CardMenu = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b py-4 pointer"
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-red-500">IDR {item.price}</p>
            </div>
            <button className="ml-4 text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <MenuOverlay item={selectedItem} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default CardMenu;
