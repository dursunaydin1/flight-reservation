import React from "react";

const mockFlights = [
  {
    id: 1,
    departure: "San Francisco International (SFO)",
    arrival: "Los Angeles International (LAX)",
    departureDate: "01/18/2025",
    returnDate: "01/25/2025",
    price: "$299",
  },
  {
    id: 2,
    departure: "John F. Kennedy International (JFK)",
    arrival: "Miami International (MIA)",
    departureDate: "01/20/2025",
    returnDate: "01/27/2025",
    price: "$399",
  },
];

const FlightResults = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Flight Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockFlights.map((flight) => (
          <div key={flight.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold">
              {flight.departure} to {flight.arrival}
            </h3>
            <p className="text-gray-600">
              Departure Date: {flight.departureDate}
            </p>
            <p className="text-gray-600">Return Date: {flight.returnDate}</p>
            <p className="text-purple-950 font-semibold">
              Price: {flight.price}
            </p>
            <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
