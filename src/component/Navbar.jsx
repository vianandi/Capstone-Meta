import React, { useState } from "react";
import { Link } from "react-router-dom";
import littlelogo from "../images/littlelogo.png";
import NavbarMenu from "../images/Navbar.svg";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-screen fixed bg-white shadow-md z-50">
      <div className="container px-4 flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img src={littlelogo} alt="Logo" className="h-[50px] w-[200px]" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-gray-900">
            Menu
          </Link>
          <Link
            to="/reservations"
            className="text-gray-700 hover:text-gray-900"
          >
            Reservations
          </Link>
          <button
            onClick={handleLoginClick}
            className="text-gray-700 hover:text-gray-900"
          >
            Login
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <img src={NavbarMenu} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } transition duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 bg-white shadow-lg">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/menu"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            Menu
          </Link>
          <Link
            to="/reservations"
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMobileMenu}
          >
            Reservations
          </Link>
          <button
            onClick={() => {
              handleLoginClick();
              toggleMobileMenu();
            }}
            className="text-gray-700 hover:text-gray-900"
          >
            Login
          </button>
        </div>
      </div>

      <Login
        show={showLogin}
        onClose={handleClose}
        onRegisterClick={handleRegisterClick}
      />
      <Register
        show={showRegister}
        onClose={handleClose}
        onLoginClick={handleLoginClick}
      />
    </nav>
  );
};

export default Navbar;
