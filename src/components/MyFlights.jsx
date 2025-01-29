import React, { useState } from "react";
import FlightsOverview from "./FlightOverview";
import { FaChevronDown, FaStar } from "react-icons/fa";

const MyFlights = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-6">
      {/* Filter buttons and star rating section */}
      <div className="flex items-center pb-4 pt-4 px-10 border-gray-300 bg-white">
        {/* Filter Buttons */}
        <div className="flex space-x-4 p-2 rounded-lg">
          {["Times", "Stops", "Airlines", "Airports", "Amenities"].map(
            (filter, idx) => (
              <button
                key={idx}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100"
              >
                {filter}
              </button>
            )
          )}
          {/* "Edit Search" button with dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 text-blue-600 flex items-center space-x-1 rounded-md"
            >
              <span className="text-sm">Edit Search</span>
              <FaChevronDown className="text-blue-600" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <div className="p-2">
                  <h4 className="font-semibold">Edit Filters</h4>
                  <div className="flex flex-col space-y-2">
                    <label>
                      <input type="checkbox" className="mr-2" />
                      Include Layovers
                    </label>
                    <label>
                      <input type="checkbox" className="mr-2" />
                      Show Only Direct Flights
                    </label>
                    <label>
                      <input type="checkbox" className="mr-2" />
                      Sort by Price
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Star Rating Groups */}
        <div className="flex ml-auto space-x-6 mr-10">
          {/* Star ratings */}
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group"
            >
              <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
                <div className="flex">
                  {[...Array(5)].map((_, starIdx) => (
                    <FaStar
                      key={starIdx}
                      className={
                        starIdx < idx ? "mr-1 text-black" : "mr-1 text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flights Overview Section */}
      <div className="px-10">
        <h2 className="text-xl font-bold mb-4">My Flights</h2>
        <FlightsOverview />
      </div>

      {/* Additional Flight Data Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Upcoming Flights</h3>
        <ul className="list-disc pl-5">
          <li>Flight to Los Angeles - Departure: 2023-12-01</li>
          <li>Flight to Miami - Departure: 2023-12-15</li>
          <li>Flight to Toronto - Departure: 2023-12-20</li>
        </ul>
      </div>
    </div>
  );
};

export default MyFlights;
