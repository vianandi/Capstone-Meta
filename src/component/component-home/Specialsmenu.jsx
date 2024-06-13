import React from "react";
import CardMenuSpe from "./CardMenuSpe";
import { Link } from "react-router-dom";
import salad from "../../images/salad.png";
import bruchetta from "../../images/bruchetta.png";
import lemon from "../../images/dessert.png";

const listmenuspe = [
  {
    image: salad,
    name: "Salad",
    price: "IDR 70K",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruchetta,
    name: "Bruchetta",
    price: "IDR 120K",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: lemon,
    name: "Lemon Dessert",
    price: "IDR 99K",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
];

const Specialsmenu = () => {
  return (
    <div className="flex flex-col w-[850px] mt-12">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-[30px] font-semibold">Specials</p>
        </div>
        <div className="rounded-[120px]">
          <Link
            to="/menu"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-[#F4CE14] border border-[#F4CE14] rounded-xl shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#F4CE14] ease">
              Online Menu
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 mt-12">
        {listmenuspe.map((item, index) => (
          <CardMenuSpe
            key={index}
            images={item.image}
            name={item.name}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Specialsmenu;
