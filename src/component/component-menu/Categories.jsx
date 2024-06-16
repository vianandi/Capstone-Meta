import React from "react";
import fire from "../../images/fire.png";
import meat from "../../images/meat.png";
import coffee from "../../images/coffee.png";
import cake from "../../images/cake.png";
import other from "../../images/pizzaa.png";

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { name: "All", image: fire },
    { name: "Meat", image: meat },
    { name: "Drink", image: coffee },
    { name: "Dessert", image: cake },
    { name: "Other", image: other },
  ];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`px-2 rounded-lg flex items-center space-x-2 w-[140px] ${
            selectedCategory === category.name
              ? "bg-[#495E57] text-white font-semibold"
              : "bg-white border"
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-[60px] h-[50px]"
          />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Categories;
