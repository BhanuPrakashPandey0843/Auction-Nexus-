import React from "react";

const ContactCTA = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-12 px-8 flex justify-between items-center rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
      <div>
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
          Have an amazing item to Bid?
        </h2>
        <p className="text-lg mt-2">
          Let’s collaborate and make it extraordinary.
        </p>
      </div>
      <button className="bg-white text-green-700 font-semibold py-3 px-8 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg hover:scale-110 transition-transform duration-200">
        Get Started
      </button>
    </div>
  );
};

export default ContactCTA;
