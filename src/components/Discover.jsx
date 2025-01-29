import React from "react";

const Discover = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Discover New Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Explore the Beaches of Bali</h3>
          <p className="text-gray-600">
            Experience the beauty of Bali's beaches.
          </p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Visit the Eiffel Tower</h3>
          <p className="text-gray-600">A must-see landmark in Paris.</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">
            Adventure in the Amazon Rainforest
          </h3>
          <p className="text-gray-600">Discover the wonders of the Amazon.</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">
            Explore the Great Wall of China
          </h3>
          <p className="text-gray-600">
            Walk along one of the greatest wonders.
          </p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Safari in Kenya</h3>
          <p className="text-gray-600">
            Experience wildlife like never before.
          </p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Relax in the Maldives</h3>
          <p className="text-gray-600">
            Enjoy the serene beauty of the Maldives.
          </p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
