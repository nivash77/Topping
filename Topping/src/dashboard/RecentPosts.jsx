import React from 'react';

const RecentPosts = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full">
      <h3 className="font-bold text-lg mb-4 text-gray-700">Recent Post</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
          List Item 1
        </div>
        <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
          List Item 2
        </div>
        <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
          List Item 3
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
