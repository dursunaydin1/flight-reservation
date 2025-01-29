import React from "react";

const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600">Departure: {flight.departureTime}</p>
          <p className="text-gray-600">Airport: {flight.departureAirport}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">{flight.airline}</p>
          <p className="text-sm">{flight.duration}</p>
        </div>
        <div>
          <p className="text-gray-600">Arrival: {flight.arrivalTime}</p>
          <p className="text-gray-600">Airport: {flight.arrivalAirport}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="text-purple-600 font-bold">${flight.price}</p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
          Book Flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
