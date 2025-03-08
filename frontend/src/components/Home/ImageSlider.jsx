import React from "react";
import "./ImageSlider.css";
import backgroundImage from "/src/assets/images/army/DSC_0400.JPG";

export default function ImageSlider() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Students in school uniform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
       >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Minds, Shaping Futures
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            At Wisdom World Academy, we nurture curiosity, inspire innovation, and foster lifelong 
            learning to create future-ready leaders and global citizens.
          </p>
          <button
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white 
              bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 
              shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Admission Query
          </button>
        </div>
      </div>
    </div>
  );
}