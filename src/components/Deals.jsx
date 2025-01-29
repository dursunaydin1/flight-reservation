import React from "react";

const Deals = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Special Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to Paris</h3>
          <p className="text-gray-600">Only $299</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to New York</h3>
          <p className="text-gray-600">Only $399</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to Tokyo</h3>
          <p className="text-gray-600">Only $499</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to London</h3>
          <p className="text-gray-600">Only $350</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to Sydney</h3>
          <p className="text-gray-600">Only $600</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to Dubai</h3>
          <p className="text-gray-600">Only $450</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to Rome</h3>
          <p className="text-gray-600">Only $320</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold">Flight to Bangkok</h3>
          <p className="text-gray-600">Only $550</p>
          <button className="mt-2 bg-purple-950 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
