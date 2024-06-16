import React, { useState } from "react";

const Register = ({ show, onClose, onLoginClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    // handle form submission
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-yellow-500 px-8 py-4 rounded-lg shadow-lg relative w-[400px]">
        <h2 className="text-2xl mb-4">Pendaftaran Akun</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="block text-sm mb-2" htmlFor="firstName">
              Nama Depan
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm mb-2" htmlFor="lastName">
              Nama Belakang
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm mb-2" htmlFor="email">
              Alamat Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm mb-2" htmlFor="phone">
              Telepon
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm mb-2" htmlFor="confirmPassword">
              Ulangi Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi
            </label>
          </div>
          <button
            className="w-full bg-gray-700 text-white py-2 rounded"
            type="submit"
          >
            Daftar
          </button>
          <button
            className="w-full mt-2 bg-white border border-gray-300 text-gray-700 py-2 rounded"
            type="button"
            onClick={onLoginClick}
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
