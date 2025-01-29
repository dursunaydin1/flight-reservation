import React from "react";
import { FaCar, FaHotel, FaSuitcase } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="space-y-4">
      {/* Car Rentals */}
      <div className="bg-white rounded-lg shadow-md w-60">
        <div className="relative">
          <img
            src="https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-tips.jpg"
            alt="Car Rentals"
            className="object-cover w-60 h-60 rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-2 flex flex-col items-start bg-black bg-opacity-50 rounded-b-lg w-full">
            <FaCar className="text-white text-2xl mb-1 transition-transform transform hover:scale-110" />
            <h4 className="text-white text-sm font-semibold uppercase transition-transform transform hover:scale-110">
              Car Rentals
            </h4>
          </div>
        </div>
      </div>

      {/* Hotels */}
      <div className="bg-white rounded-lg shadow-md w-60">
        <div className="relative">
          <img
            src="https://images.trvl-media.com/lodging/22000000/21890000/21880700/21880620/8ee26377.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
            alt="Hotels"
            className="object-cover w-60 h-60 rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-2 flex flex-col items-start bg-black bg-opacity-50 rounded-b-lg w-full">
            <FaHotel className="text-white text-2xl mb-1 transition-transform transform hover:scale-110" />
            <h4 className="text-white text-sm font-semibold uppercase transition-transform transform hover:scale-110">
              Hotels
            </h4>
          </div>
        </div>
      </div>

      {/* Travel Packages */}
      <div className="bg-white rounded-lg shadow-md w-60">
        <div className="relative">
          <img
            src="https://www.sunlife.com.ph/content/dam/sunlife/regional/philippines/images/tips-for-brighter-travels.jpg"
            alt="Travel Packages"
            className="object-cover w-60 h-60 rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-2 flex flex-col items-start bg-black bg-opacity-50 rounded-b-lg w-full">
            <FaSuitcase className="text-white text-2xl mb-1 transition-transform transform hover:scale-110" />
            <h4 className="text-white text-sm font-semibold uppercase transition-transform transform hover:scale-110">
              Travel Packages
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
