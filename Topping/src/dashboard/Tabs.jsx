import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Post');

  const renderContent = () => {
    switch (activeTab) {
      case 'Post':
        return <div className="p-4 bg-gray-100 rounded-lg">POST CONTENT</div>;
      case 'AboutMe':
        return <div className="p-4 bg-gray-100 rounded-lg">ABOUT ME CONTENT</div>;
      case 'Message':
        return <div className="p-4 bg-gray-100 rounded-lg">MESSAGE CONTENT</div>;
      case 'Activity':
        return <div className="p-4 bg-gray-100 rounded-lg">ACTIVITY CONTENT</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-6">
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab('Post')}
          className={`py-2 px-4 ${
            activeTab === 'Post' ? 'bg-purple-500 text-white' : 'bg-purple-200'
          } rounded-lg`}
        >
          Post
        </button>
        <button
          onClick={() => setActiveTab('AboutMe')}
          className={`py-2 px-4 ${
            activeTab === 'AboutMe' ? 'bg-purple-500 text-white' : 'bg-purple-200'
          } rounded-lg`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab('Message')}
          className={`py-2 px-4 ${
            activeTab === 'Message' ? 'bg-purple-500 text-white' : 'bg-purple-200'
          } rounded-lg`}
        >
          Message
        </button>
        <button
          onClick={() => setActiveTab('Activity')}
          className={`py-2 px-4 ${
            activeTab === 'Activity' ? 'bg-purple-500 text-white' : 'bg-purple-200'
          } rounded-lg`}
        >
          Activity
        </button>
      </div>

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
