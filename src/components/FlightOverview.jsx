import React, { useState, useEffect, useRef } from "react";
import FlightItem from "./FlightItem";
import { FaChevronDown } from "react-icons/fa";

const FlightsOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4 mx-4 ">
      <div className="flex justify-between items-center mx-8 my-4">
        <div className="text-black flex items-center">
          <span className="text-gray-500">Sort by:</span>
          <div className="relative ml-4 cursor-pointer" ref={dropdownRef}>
            <span onClick={toggleDropdown} className="flex items-center">
              {selectedOption}
              <FaChevronDown className="ml-2 text-xs" />
            </span>
            {isOpen && (
              <div className="absolute mt-1 w-48 bg-white border text-black border-gray-300 rounded shadow-lg z-10">
                <ul className="py-2">
                  {[
                    "Lowest Fare",
                    "Fastest Flight",
                    "Best Rated",
                    "Direct Flights",
                    "Flexible Dates",
                  ].map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="text-gray-500 flex items-center">
          <div className="flex items-center justify-center bg-white rounded-full border-2 border-blue-500 w-5 h-5 mr-1">
            <span
              className="text-blue-500 text-xs  font-bold"
              aria-label="Info"
            >
              i
            </span>
          </div>
          <span className="ml-2">Avg Fare: $225</span>
        </div>
      </div>
      <FlightItem />
    </div>
  );
};

export default FlightsOverview;
