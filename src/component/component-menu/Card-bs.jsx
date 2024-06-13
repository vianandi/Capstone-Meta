// src/components/FoodCard.js
import React from 'react';

const FoodCard = ({ image, title, price, rating, time, tag }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md m-4 ">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {tag && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold max-w-[200px]">{title}</h2>
          <span className="text-orange-500 font-bold">{price}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <span className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.561-.955L10 0l3.439 5.955L20 6.91l-5.245 4.635L15.878 18z"/>
            </svg>
            {rating}
          </span>
          <span className="ml-4">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
