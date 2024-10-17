import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow flex justify-between items-center p-6">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src="https://placehold.co/400"
          alt="Profile"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-gray-900">Yuvan</h1>
          <p className="text-gray-500">Last seen: 5 hours ago</p>
        </div>
      </div>

      <button className="border border-red-500 text-red-500 bg-white px-4 py-2 rounded transition-colors duration-200 hover:bg-red-500 hover:text-white">
        Edit Profile
      </button>
    </header>
  );
};

export default Header;
