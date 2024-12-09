import React from "react";
import { Link } from "react-router-dom";
import auctionImage from "./nexus-image.png"; 


const styles = {
  fadeInUp: {
    animation: "fadeInUp 1s ease-out",
  },
  fadeInLeft: {
    animation: "fadeInLeft 1s ease-out",
  },
  fadeInRight: {
    animation: "fadeInRight 1s ease-out",
  },
};


const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@keyframes fadeInLeft {
    0% { opacity: 0; transform: translateX(-30px); }
    100% { opacity: 1; transform: translateX(0); }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@keyframes fadeInRight {
    0% { opacity: 0; transform: translateX(30px); }
    100% { opacity: 1; transform: translateX(0); }
  }`,
  styleSheet.cssRules.length
);

function AuctionNexus() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-center items-center px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-wide text-[#155436]"
          style={styles.fadeInUp}
        >
          Auction Nexus
        </h1>
        <p
          className="text-lg md:text-xl mt-4 text-gray-600"
          style={{ ...styles.fadeInUp, animationDelay: "0.2s" }}
        >
          Connecting buyers and sellers through seamless auctions
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl w-full rounded-xl shadow-lg overflow-hidden bg-gray-50">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 h-full"
          style={{ ...styles.fadeInLeft }}
        >
          <img
            src={auctionImage}
            alt="Auction Nexus"
            className="w-full h-full object-cover rounded-lg lg:rounded-none"
          />
        </div>

        {/* Text Section */}
        <div
          className="p-8 lg:w-1/2 text-center lg:text-left lg:pl-10"
          style={styles.fadeInRight}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#155436] mb-4">
            Experience Seamless Bidding
          </h2>
          <p className="text-gray-600 mb-6">
            Join the Auction Nexus platform today and explore a world of
            seamless, secure, and transparent bidding. Revolutionize the way
            you connect with buyers and sellers.
          </p>

          {/* Login and Register Buttons */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4">
            <Link to="/login">
              <button className="bg-[#155436] hover:bg-[#0f3c29] text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-[#155436] hover:bg-[#0f3c29] text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Button */}
      <div className="mt-12" style={{ ...styles.fadeInUp, animationDelay: "0.3s" }}>
        <Link to="/explore">
          <button className="bg-[#155436] hover:bg-[#0f3c29] text-white py-3 px-8 rounded-full font-medium text-lg shadow-lg transition-all transform hover:scale-105">
            Explore Auctions
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AuctionNexus;
