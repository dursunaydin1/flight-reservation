import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";

const FlightDetails = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Flight Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Milano - Madrid</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-center">
            <FaPlaneDeparture className="text-gray-600" />
            <p className="text-sm text-gray-600">Departure</p>
            <h4 className="text-lg font-semibold text-gray-800">7:30 AM</h4>
            <p className="text-sm text-gray-600">Airport: MXP</p>
          </div>

          <div className="text-center flex flex-col items-center">
            <p className="text-green-600 font-semibold mt-2">Alitalia</p>
            <FaPlane className="text-purple-800 mb-3 text-xl" />
            <p className="text-sm text-gray-600">2h 25m (Nonstop)</p>
          </div>

          <div className="flex flex-col items-center">
            <FaPlaneArrival className="text-gray-600" />
            <p className="text-sm text-gray-600">Arrival</p>
            <h4 className="text-lg font-semibold text-gray-800">9:55 AM</h4>
            <p className="text-sm text-gray-600">Airport: MAD</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col">
            <p className="text-purple-950 text-lg font-semibold">Price:</p>
            <p className="text-purple-950 text-lg font-semibold">$200</p>
            <p className="text-sm text-gray-600">Round Trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
