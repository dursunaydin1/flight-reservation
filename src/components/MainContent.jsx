import React from "react";
import FlightSearchBar from "./FlightSearchBar";
import FlightList from "./FlightList";
import FlightFilters from "./FlightFilters";
import Sidebar from "./Sidebar";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 ">
      {/* Left Section (Search Bar, Flight List, and Filters) */}
      <div className="flex-grow lg:flex lg:flex-row lg:space-x-8">
        {/* Search Bar */}
        <div className="flex-grow lg:flex lg:flex-col">
          <FlightSearchBar />

          {/* Content Area */}
          <div className="flex flex-grow mt-10 space-x-8">
            {/* Flight List */}
            <div className="flex-grow">
              <FlightList />
            </div>

            {/* Flight Filters */}
            <div className="w-1/4 ml-2 mt-10">
              <FlightFilters />
            </div>
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="hidden lg:block lg:w-60">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
