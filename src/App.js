import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MyFlights from "./components/MyFlights";
import Deals from "./components/Deals";
import Discover from "./components/Discover";
import Profile from "./components/Profile";
import FlightDetails from "./components/FlightDetails";
// import FlightSearchBar from "./components/FlightSearchBar";
import FlightResults from "./components/FlightResults";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-100 flex items-center justify-center">
        <div className="bg-purple-50 w-full max-w-screen-2xl rounded-xl shadow-lg overflow-hidden my-20 mx-10">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/my-flights" element={<MyFlights />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/flight-details" element={<FlightDetails />} />
            <Route path="/results" element={<FlightResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
