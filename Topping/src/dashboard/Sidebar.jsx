import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`h-[90vh] fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        <ul>
          <li className="mb-4 hover:text-blue-400 cursor-pointer">Home</li>
          <li className="mb-4 hover:text-blue-400 cursor-pointer">Profile</li>
          <li className="mb-4 hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="mb-4 hover:text-blue-400 cursor-pointer">Messages</li>
          <li className="mb-4 hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
