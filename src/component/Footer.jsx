import React from 'react';
import lemonlogo from "../images/lemonlogo.png"

const Footer = () => {
  return (
    <footer className="bg-yellow-500 py-8">
      <div className="container mx-auto flex justify-around text-gray-800">
        <div className="flex flex-col items-center">
          <img src={lemonlogo} alt="Little Lemon Logo" className="w-[100px] h-[180px] my-2" />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p>Jakarta</p>
          <p>6285157372668</p>
          <p>little@lemon.com</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Social Media Links</h2>
          <p>Little lemon</p>
          <p>Little lemon</p>
          <p>Little lemon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
