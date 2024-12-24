import React from 'react';
import chatbotGif from "./chatbot.gif";

const ChattyStats = () => {
  return (
    <div className="bg-gradient-to-b from-green-800 via-green-700 to-green-900 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">
              The Most Trusted and <span className="text-yellow-400">Fast Chatbot</span> Ever
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Experience the future of AI-driven conversations. Trusted by millions worldwide!
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 py-3 px-8 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all">
                Try It Now
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={chatbotGif}
              alt="Chatbot Illustration"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            We're <span className="text-yellow-400">just getting started</span> on our journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500K+', label: 'Active users worldwide', icon: '🌍' },
              { value: '100M+', label: 'Chat responses every day', icon: '💬' },
              { value: '0.01sec', label: 'Average response time', icon: '⚡' },
              { value: '100K+', label: '5-star reviews', icon: '⭐' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-700 py-8 px-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                <div className="text-5xl">{stat.icon}</div>
                <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattyStats;
