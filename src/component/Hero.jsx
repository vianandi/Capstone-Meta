import { Link } from "react-router-dom";
import restaurant from "../images/restaurant.jpg";

const Hero = () => {
  return (
    <div className="bg-[#F4CE14] p-5 pb-[50px]">
      <div className="flex flex-row gap-5 mx-[200px] items-center justify-center">
        <div className="p-2 max-w-[525px]">
          <p className="text-[56px]">Little Lemon</p>
          <p className="text-[20px]">Jakarta</p>
          <p className="mt-3 text-justify">
            From the moment you reserve your table to the instant your meal
            arrives at your door, experience the finest in dining and delivery
            with us!
          </p>
          <div className="mt-[60px]">
            <Link
              to="/reservations"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#495E57] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#495E57] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Reserve a Table
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-[375px] h-[305px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
