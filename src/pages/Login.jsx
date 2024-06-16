import React from "react";
import { Link } from "react-router-dom";

const Login = ({ show, onClose, onRegisterClick }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-yellow-500 p-8 rounded-lg shadow-lg relative w-[400px]">
        <h2 className="text-2xl mb-4">Masuk ke Akun</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">
              Remember Me
            </label>
            <Link
              to="/forgot-password"
              className="ml-auto text-sm text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            className="w-full bg-gray-700 text-white py-2 rounded"
            type="submit"
          >
            Login
          </button>
          <button
            className="w-full mt-2 bg-white border border-gray-300 text-gray-700 py-2 rounded"
            type="button"
            onClick={onRegisterClick}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
