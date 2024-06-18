// src/components/Reservation.js
import React, { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import indoor1 from "../../images/indoor1.png";
import indoor2 from "../../images/indoor2.png";
import outdoor1 from "../../images/outdoor1.png";
import outdoor2 from "../../images/outdoor2.png";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import CustomTimePicker from "../../component/component-reservation/CustomTimePicker";

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("20:00");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedBench, setSelectedBench] = useState(null);
  const navigate = useNavigate();

  const floors = [
    {
      id: 1,
      name: "1st Floor - Indoor",
      image: indoor1,
      benches: [
        { id: 1, label: "Bench for 2 Person", available: 8, price: 50000 },
        { id: 2, label: "Bench for 4 Person", available: 2, price: 100000 },
        { id: 3, label: "Bench for 6 Person", available: 0, price: 150000 },
        { id: 4, label: "Bench for 8 Person", available: 0, price: 200000 },
      ],
    },
    {
      id: 2,
      name: "2nd Floor - Indoor",
      image: indoor2,
      benches: [
        { id: 1, label: "Bench for 2 Person", available: 4, price: 50000 },
        { id: 2, label: "Bench for 4 Person", available: 3, price: 100000 },
        { id: 3, label: "Bench for 6 Person", available: 1, price: 150000 },
        { id: 4, label: "Bench for 8 Person", available: 2, price: 200000 },
      ],
    },
    {
      id: 3,
      name: "1st Floor - Outdoor",
      image: outdoor1,
      benches: [
        { id: 1, label: "Bench for 2 Person", available: 3, price: 50000 },
        { id: 2, label: "Bench for 4 Person", available: 2, price: 100000 },
        { id: 3, label: "Bench for 6 Person", available: 0, price: 150000 },
        { id: 4, label: "Bench for 8 Person", available: 1, price: 200000 },
      ],
    },
    {
      id: 4,
      name: "2nd Floor - Outdoor",
      image: outdoor2,
      benches: [
        { id: 1, label: "Bench for 2 Person", available: 4, price: 50000 },
        { id: 2, label: "Bench for 4 Person", available: 0, price: 100000 },
        { id: 3, label: "Bench for 6 Person", available: 1, price: 150000 },
        { id: 4, label: "Bench for 8 Person", available: 0, price: 200000 },
      ],
    },
  ];

  const handleFloorClick = (floorName) => {
    setSelectedFloor(floorName);
    setIsOverlayVisible(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayVisible(false);
  };

  const selectedFloorData = floors.find(
    (floor) => floor.name === selectedFloor
  );

  const handleReservation = () => {
    if (selectedBench) {
      navigate("/payment", {
        state: {
          selectedBench,
          floorName: selectedFloor,
          selectedDate,
          selectedTime,
          price: selectedBench.price,
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-green-800 text-white p-8 rounded-lg shadow-md w-full max-w-4xl mt-[120px] mb-[50px]">
        <h1 className="text-center text-2xl font-bold mb-8">
          RESERVATION - DINE IN
        </h1>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="flex items-center bg-white text-gray-800 px-4 py-2 rounded">
            <FaCalendarAlt className="mr-2" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="outline-none"
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <CustomTimePicker
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>
        <h2 className="text-center text-xl font-semibold mb-4">Select Floor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {floors.map((floor) => (
            <div
              key={floor.id}
              onClick={() => handleFloorClick(floor.name)}
              className={`relative cursor-pointer border-2 rounded-lg overflow-hidden ${
                selectedFloor === floor.name
                  ? "border-orange-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={floor.image}
                alt={floor.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
                {floor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOverlayVisible && selectedFloorData && (
        <BenchOverlay
          floorName={selectedFloor}
          benches={selectedFloorData.benches}
          onClose={handleOverlayClose}
          onBenchSelect={setSelectedBench}
          selectedBench={selectedBench}
          handleReservation={handleReservation}
        />
      )}
    </div>
  );
};

const BenchOverlay = ({
  floorName,
  benches,
  onClose,
  onBenchSelect,
  selectedBench,
  handleReservation,
}) => {
  const overlayRef = useRef();

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={overlayRef}
        className="bg-[#495E57] p-8 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-center text-2xl font-bold mb-8 text-[#F4CE14]">
          Benches Available
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benches.map((bench) => (
            <div
              key={bench.id}
              onClick={() => bench.available > 0 && onBenchSelect(bench)}
              className={`p-4 rounded-lg text-center cursor-pointer ${
                bench.available === 0
                  ? "bg-gray-500 cursor-not-allowed"
                  : bench.id === selectedBench?.id
                  ? "bg-orange-700 text-white"
                  : "bg-yellow-400"
              }`}
            >
              <h3 className="text-xl font-bold">{bench.label}</h3>
              <p className="text-sm">Available {bench.available} Bench</p>
            </div>
          ))}
        </div>
        <div className="bg-[#333333] text-white p-4 rounded-lg mt-8">
          <p className="text-lg">Bench Reservation</p>
          <p className="text-2xl font-bold">
            IDR {selectedBench ? selectedBench.price.toFixed(2) : "0.00"}
          </p>
          <button
            onClick={handleReservation}
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg mt-4 w-full"
            disabled={!selectedBench || selectedBench.available === 0}
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
