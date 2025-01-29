import React from "react";
import { FaEdit, FaStar } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="flex items-center mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Joane Smith"
          className="w-16 h-16 rounded-full border-none mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">Joane Smith</h3>
          <p className="text-gray-600">joane.smith@example.com</p>
        </div>
      </div>

      <div className="border rounded-lg p-4 shadow-md mb-6">
        <h3 className="text-lg font-semibold">My Flights</h3>
        <ul className="list-disc pl-5">
          <li>Flight to Los Angeles - Departure: 2023-12-01</li>
          <li>Flight to Miami - Departure: 2023-12-15</li>
          <li>Flight to Toronto - Departure: 2023-12-20</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 shadow-md mb-6">
        <h3 className="text-lg font-semibold">Star Ratings</h3>
        <div className="flex">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} className="text-black mr-1" />
          ))}
        </div>
      </div>

      <button className="bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
        <FaEdit className="mr-2" />
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
