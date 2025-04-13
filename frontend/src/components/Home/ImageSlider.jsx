import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import img from "/src/assets/images/army/DSC_0400.JPG";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import multiple images for the carousel
const images = [
  {
    src: img,
    alt: "Students in school uniform",
    title: "Empowering Minds, Shaping Futures",
    description: "At Wisdom World Academy, we nurture curiosity, inspire innovation, and foster lifelong learning to create future-ready leaders and global citizens."
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle image loading
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
        });
      });
      
      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };
    
    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Hero Images with Overlay */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={currentSlide !== index}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {images[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in">
            {images[currentSlide].description}
          </p>
          <a
            href="/enquiry"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white 
              bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 
              shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Admission Query
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div> */}
    </div>
  );
}