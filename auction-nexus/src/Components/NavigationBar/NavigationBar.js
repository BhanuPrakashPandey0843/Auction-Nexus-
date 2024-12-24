import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaStore,
  FaProductHunt,
  FaGavel,
  FaTags,
  FaCubes,
  FaClipboardList,
  FaMoneyBill,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import "./NavigationBar.css"; 

const NavigationBar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Users", path: "/users", icon: <FaUsers /> },
    { name: "Sellers", path: "/sellers", icon: <FaStore /> },
    { name: "Products", path: "/products", icon: <FaProductHunt /> },
    { name: "Auctions", path: "/auctions", icon: <FaGavel /> },
    { name: "Bids", path: "/bids", icon: <FaTags /> },
    { name: "Categories", path: "/categories", icon: <FaCubes /> },
    { name: "Product Type", path: "/product-type", icon: <FaClipboardList /> },
    { name: "Orders", path: "/orders", icon: <FaClipboardList /> },
    { name: "Payment", path: "/payment", icon: <FaMoneyBill /> },
    { name: "Address", path: "/address", icon: <FaMapMarkerAlt /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div
      className={`nav-bar ${isExpanded ? "w-64" : "w-20"} h-screen flex flex-col justify-between text-gray-100 transition-all duration-300 bg-gradient-to-r from-green-700 to-teal-800`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={toggleSidebar}
          className="text-white bg-green-600 hover:bg-green-500 p-2 rounded-full"
        >
          {isExpanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-4">
        <img
          src="https://randomuser.me/api/portraits/women/27.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-white mb-2"
        />
        {isExpanded && (
          <div className="text-center">
            <span className="text-white font-semibold">Admin</span> 
            <div>  </div>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
              EDIT
            </button>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <div className="menu-container flex-grow overflow-y-auto">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isExpanded && (
                <Link to={item.path} className="ml-3 text-white">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="p-4 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Auction Nexus
        </p>
      </div>
    </div>
  );
};

export default NavigationBar;
