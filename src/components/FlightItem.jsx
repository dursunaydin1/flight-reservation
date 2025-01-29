import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FlightItem = () => {
  return (
    <div className="flex items-center justify-between p-4 m-8 bg-white rounded-lg shadow-md">
      {/* Flight Time and Logo Section */}
      <div className="flex items-start flex-col">
        {/* Flight Time and Logo on the Same Row */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Airline Logo"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-lg font-semibold">7:40 AM — 9:12 AM</div>
        </div>

        {/* Flight Details Section */}
        <div className="flex space-x-24 mt-2">
                  {/* Airline Name and Flight Details */}
          <div className="flex flex-col ml-14">
            <div className="text-sm text-gray-500">Delta Air Lines</div>
            <button className="text-xs text-blue-600 flex items-center space-x-1 rounded-md">
              <span className="">Flight Details</span>
              <FaChevronDown className="text-blue-600" />
            </button>
          </div>
          {/* Flight Info Section */}
          <div className="flex flex-col">
            <div className="text-sm font-semibold">Nonstop</div>
            <div className="text-xs text-gray-500">1h 32m</div>
          </div>
          {/* Route Information */}
          <div className="flex flex-col">
            <div className="text-sm font-semibold">SFO to LAX</div>
            <div className="text-xs text-gray-500">DL 1443</div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex space-x-4">
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">$156</div>
          <div className="text-xs text-gray-500">Main</div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">$204</div>
          <div className="text-xs text-gray-500">Comfort+</div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">$386</div>
          <div className="text-xs text-gray-500">Delta One</div>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;
