import React, { useState } from "react";
import Categories from "./Categories";
import CardMenu from "./Card-menu";
import Pagination from "./Pagination";
import Cart from "./Cart";
import MenuOverlay from "./MenuOverlay";
import sirloin from "../../images/sirloin.png";
import noodle from "../../images/noodle.png";
import latte from "../../images/latte.png";
import friedchicken from "../../images/friedchicken.png";
import icecream from "../../images/icecream.png";
import strawcheesecake from "../../images/strawcheesecake.png";
import waffle from "../../images/waffle.png";
import matcha from "../../images/matcha.png";
import pancake from "../../images/pancake.png";
import pizza from "../../images/pizza.png";
import frenchToast from "../../images/toast.png";
import friedRice from "../../images/friedrice.png";
import burger from "../../images/burger.png";
import americano from "../../images/americano.png";

const ListMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      name: "Super Sirloin Blackpaper",
      category: "Meat",
      description: "Beef Sirloin cooked with black pepper and rosemary",
      price: "380000",
      image: sirloin,
    },
    {
      id: 2,
      name: "Spicy Noodle",
      category: "Other",
      description: "Spicy noodle with beef and special sauce",
      price: "250000",
      image: noodle,
    },
    {
      id: 3,
      name: "Latte Art",
      category: "Drink",
      description: "Hot latte with a strong taste of coffee",
      price: "150000",
      image: latte,
    },
    {
      id: 4,
      name: "Fried Chicken",
      category: "Meat",
      description: "Fried chicken with a crispy skin and tender meat",
      price: "300000",
      image: friedchicken,
    },
    {
      id: 5,
      name: "Ice Cream",
      category: "Dessert",
      description: "Vanilla ice cream with chocolate and nuts",
      price: "119000",
      image: icecream,
    },
    {
      id: 6,
      name: "Strawberry Cheesecake",
      category: "Dessert",
      description: "Cheesecake with strawberry topping",
      price: "90000",
      image: strawcheesecake,
    },
    {
      id: 7,
      name: "Blueberry Waffle",
      category: "Dessert",
      description:
        "Hot waffles topped with blueberries and sprinkled with sugar",
      price: "400000",
      image: waffle,
    },
    {
      id: 8,
      name: "Matcha Latte",
      category: "Drink",
      description: "Hot green tea latte with a sweet taste",
      price: "120000",
      image: matcha,
    },
    {
      id: 9,
      name: "Pancake Tower with Maple Syrup",
      category: "Dessert",
      description: "Pancake Tower with Maple Syrup",
      price: "60000",
      image: pancake,
    },
    {
      id: 10,
      name: "Pizza Cheese Sausage",
      category: "Other",
      description: "Pizza Cheese Sausage",
      price: "60000",
      image: pizza,
    },
    {
      id: 11,
      name: "Creamy French Toast",
      category: "Dessert",
      description: "Creamy French Toast",
      price: "60000",
      image: frenchToast,
    },
    {
      id: 12,
      name: "Special Fried Rice",
      category: "Other",
      description: "Special Fried Rice",
      price: "60000",
      image: friedRice,
    },
    {
      id: 13,
      name: "Big Burger",
      category: "Meat",
      description: "Big Burger",
      price: "60000",
      image: burger,
    },
    {
      id: 14,
      name: "Cold Americano",
      category: "Drink",
      description: "Cold Americano",
      price: "60000",
      image: americano,
    },
    // ... more items
  ];

  const itemsPerPage = 6;
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen p-8 w-[1200px]">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <CardMenu items={paginatedItems} onItemClicked={handleItemClick} />
      {selectedItem && (
        <MenuOverlay item={selectedItem} onClose={handleCloseOverlay} />
      )}
      <Cart />
      <Pagination
        currentPage={currentPage}
        totalItems={filteredItems.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ListMenu;
