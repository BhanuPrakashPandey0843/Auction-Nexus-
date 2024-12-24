import React from "react";
import { motion } from "framer-motion"; // Optional for more complex animations
import image from "./Auction Nexus.gif"; // Update with your image path

const TextAndImage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 px-4 bg-gray-50">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          Inspiring Creativity
        </motion.h1>

        {/* Text Animation */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0"
        >
          Discover how our team brings innovation to life, with a blend of
          creativity, strategy, and cutting-edge technology to achieve your
          goals.
        </motion.p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <motion.img
          src={image}
          alt="Creative Team"
          className="w-full h-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default TextAndImage;
