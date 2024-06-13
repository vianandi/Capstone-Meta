import React from 'react';
import littlelogo from "../images/littlelogo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-screen fixed bg-white shadow-md z-50">
      <div className="container px-4 flex justify-center gap-[350px] items-center py-4">
        <div className="flex items-center space-x-4">
          <img src={littlelogo} alt="Logo" className="h-[50px] w-[200px] mr-16" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/"  className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/menu" className="text-gray-700 hover:text-gray-900">Menu</Link>
          <Link to="/reservations" className="text-gray-700 hover:text-gray-900">Reservations</Link>
          {/* <Link to="/" className="text-gray-700 hover:text-gray-900">Order Online</Link> */}
          {/* <Link to="/" className="text-gray-700 hover:text-gray-900">Login</Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
