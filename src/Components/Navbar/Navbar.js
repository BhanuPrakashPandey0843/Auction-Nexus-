import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#155436] text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            Current Date: {formattedDate} | Time: {formattedTime}
          </div>
          <div className="flex space-x-4">
            <FaSearch className="text-white w-5 h-5" />
            <FaUser className="text-white w-5 h-5" />
            <FaHeart className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
       
          {/* Logo */}
          <div className="flex items-center">
          <h2>Auction-Nexus</h2>
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Notice
            </Link>
            <Link to="/authorization" className="nav-link">
              Authorization
            </Link>
            <Link to="/live-auction" className="nav-link">
              Live Auction
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/chat" className="nav-link">
              Chat-Bot
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link to="/logout">
              <button className="primary-btn">LOGOUT</button>
            </Link>
            <Link to="/login">
              <button className="primary-btn">LOGIN</button>
            </Link>
            <Link to="/registration">
              <button className="primary-btn">REGISTER</button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-3">
            <div className="space-y-4">
              <Link to="/" className="block nav-link">
                Home
              </Link>
              <Link to="/products" className="block nav-link">
                Notice
              </Link>
              <Link to="/authorization" className="block nav-link">
                Authorization
              </Link>
              <Link to="/live-auction" className="block nav-link">
                Live Auction
              </Link>
              <Link to="/contact" className="block nav-link">
                Contact
              </Link>
              <Link to="/chat" className="block nav-link">
                Chat-Bot
              </Link>
              <Link to="/logout">
                <button className="primary-btn w-full">LOGOUT</button>
              </Link>
              <Link to="/login">
                <button className="primary-btn w-full">LOGIN</button>
              </Link>
              <Link to="/registration">
                <button className="primary-btn w-full">REGISTER</button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Styles */}
      <style>
        {`
          .nav-link {
            color: #555;
            font-weight: 600;
            transition: color 0.3s;
          }
          .nav-link:hover {
            color: #155436;
          }
          .primary-btn {
            background-color: #155436;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            font-weight: 600;
            transition: background-color 0.3s;
          }
          .primary-btn:hover {
            background-color: #0f3c29;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;



