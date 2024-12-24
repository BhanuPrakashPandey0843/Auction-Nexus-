import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#155436] text-white py-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-48 h-48 bg-white/10 rounded-full absolute -top-10 -left-10 animate-pulse"></div>
        <div className="w-64 h-64 bg-white/5 rounded-full absolute top-20 right-20 animate-bounce"></div>
        <div className="w-32 h-32 bg-white/20 rounded-full absolute bottom-10 left-1/3 animate-ping"></div>
        <div className="w-40 h-40 bg-white/15 rounded-full absolute bottom-20 right-10 animate-spin-slow"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sitemap Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Site Map</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition-all">About</li>
              <li className="hover:text-gray-300 transition-all">Contact Us</li>
              <li className="hover:text-gray-300 transition-all">Auction</li>
              <li className="hover:text-gray-300 transition-all">Chat Bot</li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Developers</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                Bhanu Prakash Pandey <a href="https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/?originalSubdomain=in" className="text-white hover:text-gray-300 transition-all"><FaLinkedinIn /></a>
              </li>
              <li className="flex items-center gap-2">
                Jasika Kumari <a href="https://www.linkedin.com/in/jasika-pradhan-61462027a/?originalSubdomain=in" className="text-white hover:text-gray-300 transition-all"><FaLinkedinIn /></a>
              </li>
              <li className="flex items-center gap-2">
                Nishu Kumari <a href="https://www.linkedin.com/in/nishu-kumari-009632245/?originalSubdomain=in" className="text-white hover:text-gray-300 transition-all"><FaLinkedinIn /></a>
              </li>
            </ul>
          </div>

          {/* Random Text Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Auction-Nexus</h2>
            <p className="text-sm leading-relaxed hover:text-gray-300 transition-all">
            In the heart of the bid, where dreams take flight, <br></br>
Auction-Nexus awaits, a treasure in sight.<br></br>
With every click, a story unfolds,<br></br>
Where the rare and the beautiful beckon like gold.
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/" className="hover:scale-110 transition-all duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/?originalSubdomain=in" className="hover:scale-110 transition-all duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/?originalSubdomain=in" className="hover:scale-110 transition-all duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/?originalSubdomain=in" className="hover:scale-110 transition-all duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Auction-Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
