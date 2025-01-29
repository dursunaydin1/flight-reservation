import React, { useState } from "react";
import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
} from "react-icons/fa";
import mockAirports from "../data/mockAirports";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const FlightSearchBar = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("round");
  const [departureInputValue, setDepartureInputValue] = useState("");
  const [arrivalInputValue, setArrivalInputValue] = useState("");
  const [filteredDepartureAirports, setFilteredDepartureAirports] = useState(
    []
  );
  const [filteredArrivalAirports, setFilteredArrivalAirports] = useState([]);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleDepartureInputChange = (value) => {
    setDepartureInputValue(value);
    const filtered = mockAirports.filter(
      (airport) =>
        airport.airport.toLowerCase().includes(value.toLowerCase()) &&
        airport.type === "departure"
    );
    setFilteredDepartureAirports(filtered);
  };

  const handleArrivalInputChange = (value) => {
    setArrivalInputValue(value);
    const filtered = mockAirports.filter(
      (airport) =>
        airport.airport.toLowerCase().includes(value.toLowerCase()) &&
        airport.type === "arrival"
    );
    setFilteredArrivalAirports(filtered);
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const isButtonActive = () => {
    return (
      departureInputValue &&
      arrivalInputValue &&
      departureDate &&
      (tripType === "oneway" || returnDate)
    );
  };

  return (
    <div className="bg-white rounded-xl p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaPlane className="text-black text-xl mr-2" />
          <h2 className="text-lg font-semibold text-black uppercase">
            Book Your Flight
          </h2>
        </div>
        <div className="flex gap-0.5">
          <button
            onClick={() => handleTripTypeChange("round")}
            className={`px-4 py-2 rounded-l-full text-sm font-semibold ${
              tripType === "round"
                ? "bg-purple-950 text-gray-200"
                : "bg-gray-200 text-purple-950"
            }`}
          >
            Round trip
          </button>
          <button
            onClick={() => handleTripTypeChange("oneway")}
            className={`px-4 py-2 rounded-r-full text-sm font-semibold ${
              tripType === "oneway"
                ? "bg-purple-950 text-gray-200"
                : "bg-gray-200 text-purple-950"
            }`}
          >
            One way
          </button>
        </div>
      </div>

      {/* Input Fields Section */}
      <div className="flex gap-0.5 mb-4">
        <div className="flex space-x-1 flex-1">
          {/* Departure Input */}
          <div className="relative flex-1 flex items-center">
            <FaPlaneDeparture className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950 z-10" />
            <input
              type="text"
              placeholder="Departure Airport"
              value={departureInputValue}
              onChange={(e) => handleDepartureInputChange(e.target.value)}
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {departureInputValue && filteredDepartureAirports.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded-lg w-full z-10">
                {filteredDepartureAirports.map((airport) => (
                  <li
                    key={airport.iata}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setDepartureInputValue(airport.airport);
                      setFilteredDepartureAirports([]);
                    }}
                  >
                    {airport.airport} ({airport.iata})
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Arrival Input */}
          <div className="relative flex-1 flex items-center">
            <FaPlaneArrival className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950 z-10" />
            <input
              type="text"
              placeholder="Arrival Airport"
              value={arrivalInputValue}
              onChange={(e) => handleArrivalInputChange(e.target.value)}
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-none rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {arrivalInputValue && filteredArrivalAirports.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded-lg w-full z-10">
                {filteredArrivalAirports.map((airport) => (
                  <li
                    key={airport.iata}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setArrivalInputValue(airport.airport);
                      setFilteredArrivalAirports([]);
                    }}
                  >
                    {airport.airport} ({airport.iata})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="w-4"></div>

        <div className="flex space-x-1 flex-1">
          {/* Departure Date Input */}
          <div className="relative flex-1 flex items-center">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950 z-10" />
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              placeholderText="Departure Date"
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* Return Date Input */}
          <div className="relative flex-1 flex items-center">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950 z-10" />
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Return Date"
              disabled={tripType === "oneway"}
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-none rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Submit Button Section */}
      <div className="flex justify-start">
        <button
          className={`bg-purple-950 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-700 ${
            isButtonActive() ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isButtonActive()}
          onClick={() => {
            if (isButtonActive()) {
              navigate("/results");
            }
          }}
        >
          Show flights
        </button>
      </div>
    </div>
  );
};

export default FlightSearchBar;
