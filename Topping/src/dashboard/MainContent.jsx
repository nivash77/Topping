import React from 'react';

const MainContent = () => {
  return (
    <div className="p-6 bg-gray-100 min-h">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cooking Area</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Total Recipes</h3>
          <p className="text-gray-500 text-3xl">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Active Users</h3>
          <p className="text-gray-500 text-3xl">75</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">New Messages</h3>
          <p className="text-gray-500 text-3xl">10</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
