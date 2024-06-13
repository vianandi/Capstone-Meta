// src/components/CustomTimePicker.js
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { FaClock } from 'react-icons/fa';

const CustomTimePicker = ({ selectedTime, setSelectedTime }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        className="flex items-center bg-white text-gray-800 px-4 py-2 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaClock className="mr-2" />
        <span>{selectedTime}</span>
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded">
          <TimePicker
            onChange={(time) => {
              setSelectedTime(time);
              setIsOpen(false);
            }}
            value={selectedTime}
            className="outline-none text-black"
          />
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;
