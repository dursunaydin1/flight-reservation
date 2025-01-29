import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const FlightList = () => {
  return (
    <div className="bg-purple-50 rounded-lg">
      {/* Flight Info Card */}
      <div className="bg-white p-6 mb-4 relative rounded-tr-lg rounded-tl-lg rounded-br-lg">
        {/* Title - Milano-Madrid */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Milano - Madrid
          </h3>
        </div>

        {/* Flight Details */}
        <div className="flex justify-between items-center">
          {/* Departure Information */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <FaPlaneDeparture className="text-gray-600" />
              <p className="text-sm text-gray-600 ml-2">Departure</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">7:30 AM</h4>
              <p className="text-sm text-gray-600">Airport: MXP</p>
            </div>
          </div>

          {/* Separator Line */}
          <div className="mx-4 w-20">
            <hr style={{ borderColor: "gray", borderWidth: "1.5px" }} />
          </div>

          {/* Flight Duration and Airline */}
          <div className="text-center flex flex-col items-center">
            <p className="text-green-600 font-semibold mt-2">Alitalia</p>
            <FaPlane className="text-purple-800 mb-3 text-xl" />
            <p className="text-sm text-gray-600">2h 25m (Nonstop)</p>
          </div>

          {/* Separator Line */}
          <div className="mx-4 w-20">
            <hr style={{ borderColor: "gray", borderWidth: "1.5px" }} />
          </div>

          {/* Arrival Information */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <FaPlaneArrival className="text-gray-600" />
              <p className="text-sm text-gray-600 ml-2">Arrival</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">9:55 AM</h4>
              <p className="text-sm text-gray-600">Airport: MAD</p>
            </div>
          </div>
        </div>

        {/* Price and Booking Button */}
        <div className="flex justify-between items-center mt-6">
          {/* Price Information */}
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="text-purple-950 text-lg font-semibold">Price:</p>
              <p className="text-purple-950 text-lg font-semibold ml-1">$200</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Round Trip</p>
            </div>
          </div>

          {/* Book Flight Button */}
          <Link
            to="/flight-details"
            className="bg-purple-950 text-white px-8 py-5 rounded-tl-lg rounded-br-lg hover:bg-purple-700 font-semibold absolute bottom-0 right-0"
          >
            Book Flight
          </Link>
        </div>
      </div>

      {/* Check Details Button */}
      <div className="text-center mt-[-15px]">
        <Link
          to="/flight-details"
          className="text-lg text-purple-950 underline hover:text-purple-700 bg-purple-100 px-4 py-3 rounded-bl-lg rounded-br-lg block w-max"
        >
          Check the details
        </Link>
      </div>
    </div>
  );
};

export default FlightList;
