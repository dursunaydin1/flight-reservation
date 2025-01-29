import React from "react";

const PriceOptions = ({ prices }) => {
  return (
    <div className="flex space-x-4">
      {Object.entries(prices).map(([className, price], idx) => (
        <div key={idx} className="text-center">
          <p className="text-sm capitalize text-gray-600">{className}</p>
          <p className="font-bold text-gray-800">${price}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceOptions;
