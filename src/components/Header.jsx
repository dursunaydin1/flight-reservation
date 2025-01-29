import React from "react";
import {
  FaPlane,
  FaTag,
  FaGlobeAmericas,
  FaSuitcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mt-4 py-4 px-6 flex items-center justify-between">
      {/* Plane Escape section */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="bg-purple-950 rounded-full p-2">
          <FaPlane className="text-white" />
        </div>
        <p className="text-black text-lg font-semibold uppercase">
          Plane Scape
        </p>
      </Link>

      {/* Deals, Flights, and Discover sections */}
      <div className="flex space-x-6">
        <Link to="/deals" className="flex items-center space-x-2">
          <FaTag className="text-purple-950" />
          <p className="text-black">Deals</p>
        </Link>
        <div className="flex items-center space-x-2">
          <Link to="/my-flights" className="flex items-center space-x-2">
            <FaSuitcase className="text-purple-950" />
            <p className="text-black">My Flights</p>
          </Link>
        </div>
        <Link to="/discover" className="flex items-center space-x-2">
          <FaGlobeAmericas className="text-purple-950" />
          <p className="text-black">Discover</p>
        </Link>
      

        {/* Joane Smith section */}
        <div className="flex items-center cursor-pointer">
          <Link to="/profile" className="flex items-center space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Joane Smith"
              className="w-8 h-8 rounded-full border-none"
            />
            <p className="text-black ml-2">Joane Smith</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
