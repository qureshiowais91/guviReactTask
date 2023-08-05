import React from "react";

const CustomText = () => {
  return (
    <div className="container">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Custom Text Color Utilities
          </h6>
        </div>
        <div className="card-body">
          <p className="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
          <p className="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
          <p className="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
          <p className="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
          <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
          <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
          <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
          <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
          <p className="text-gray-900 p-3 m-0">.text-gray-900</p>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Custom Font Size Utilities
          </h6>
        </div>
        <div className="card-body">
          <p className="text-xs">.text-xs</p>
          <p className="text-lg mb-0">.text-lg</p>
        </div>
      </div>
    </div>
  );
};

export default CustomText;
