import React from "react";

const ContactHero = () => {
  return (
    <div className="relative w-full h-[75vh] bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-50 animate-pulse absolute top-5 left-5"></div>
        <div className="w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 animate-bounce absolute bottom-5 right-5"></div>
        <div className="w-56 h-56 bg-purple-200 rounded-full blur-3xl opacity-50 animate-spin-slow absolute top-20 right-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          <span className="text-gray-500">Home</span> / Contact
        </p>
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
          Get in Touch
        </button>
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.15c58.53-6.73 115.65-22.17 173-29.17 60.66-7.45 121.5-5.16 181.53 9.17 42.95 9.74 83.52 24.16 126.12 32.12 59.73 11.52 116.86 3.15 175.44-10.35 30.64-7.13 60.62-18.28 91.29-25.17 46.73-10.51 91.57-7.52 134.85 3.88 30.11 8.07 59.48 20.32 89.79 27.24V120H0V99.85c30.12-10.49 62.74-16.38 95.84-20.3 53.34-6.46 107.71-7.85 161.36-23.4 40.24-11.45 78.39-33.34 117.84-44z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ContactHero;
