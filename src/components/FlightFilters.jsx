import React from "react";

const FlightFilters = () => {
  return (
    <div>
      {/* Sort by Section */}
      <h3 className="text-lg font-bold mb-2">Sort by:</h3>
      <select className="w-full p-3 border rounded-md mb-6">
        <option>Lowest Price</option>
        <option>Arrival Time</option>
        <option>Departure Time</option>
        <option>Duration</option>
        <option>Airline</option>
      </select>

      <div>
        {/* Arrival Time Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Arrival Time</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="arrival-time" className="mr-2" />
              <span>5:00 AM - 11:59 AM</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="arrival-time" className="mr-2" />
              <span>12:00 PM - 5:59 PM</span>
            </label>
          </div>
        </div>

        {/* Stops Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Stops</h3>
          <div className="space-y-2">
            {/* Radio button for No Stops */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="stops" className="mr-2" />
                None Stops
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for 1 Stop */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="stops" className="mr-2" />1 Stop
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for 2+ Stops */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="stops" className="mr-2" />
                2+ Stops
              </span>
              <span className="text-gray-500">$230</span>
            </label>
          </div>
        </div>

        {/* Airlines Included Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Airlines Included</h3>
          <div className="space-y-2">
            {/* Radio button for Alitalia */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="airlines" className="mr-2" />
                Alitalia
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for Lufthansa */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="airlines" className="mr-2" />
                Lufthansa
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for Air France */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="airlines" className="mr-2" />
                Air France
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for Brussels Airlines */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="airlines" className="mr-2" />
                Brussels Airlines
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for Air Italy */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="airlines" className="mr-2" />
                Air Italy
              </span>
              <span className="text-gray-500">$230</span>
            </label>
            {/* Radio button for Siberia */}
            <label className="flex items-center justify-between">
              <span className="flex items-center">
                <input type="radio" name="airlines" className="mr-2" />
                Siberia
              </span>
              <span className="text-gray-500">$230</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightFilters;
