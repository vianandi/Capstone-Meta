// src/components/BestSellerSection.js
import React from 'react';
import FoodCard from './Card-bs';
import pancake from '../../images/pancake.png';
import pizza from '../../images/pizza.png';
import frenchToast from '../../images/toast.png';
import friedRice from '../../images/friedrice.png';
import burger from '../../images/burger.png';
import americano from '../../images/americano.png';

const bestSellers = [
  { image: pancake, title: 'Pancake Tower with Maple Syrup', price: 'IDR 60,000.00', rating: '4.7', time: '5 Min', tag: 'New' },
  { image: pizza, title: 'Pizza Cheese Sausage', price: 'IDR 60,000.00', rating: '4.7', time: '5 Min', tag: '20% Off' },
  { image: frenchToast, title: 'Creamy French Toast', price: 'IDR 60,000.00', rating: '4.7', time: '5 Min', tag: '15% Off' },
  { image: friedRice, title: 'Special Fried Rice', price: 'IDR 60,000.00', rating: '4.7', time: '5 Min', tag: '15% Off' },
  { image: burger, title: 'Big Burger', price: 'IDR 60,000.00', rating: '4.7', time: '5 Min' , tag: '#1' },
  { image: americano, title: 'Cold Americano', price: 'IDR 60,000.00', rating: '4.7', time: '5 Min', tag: '15% Off' },
];

const BestSellerSection = () => {
  return (
    <div className="container mx-auto p-8 max-w-[1300px] font-sans">
      <h1 className="text-3xl font-bold mb-8">Best Seller Food</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestSellers.map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            time={item.time}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSection;
