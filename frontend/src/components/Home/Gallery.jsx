import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

// Importing images
import img1 from "/src/assets/images/army/DSC_0492.JPG";
import img2 from "/src/assets/images/army/planting.jpg";
import img3 from "/src/assets/images/ourPurpose.png";
import img4 from "/src/assets/images/army/DSC_0529.JPG";
import img5 from "/src/assets/images/army/DSC_0640.JPG";
import img6 from "/src/assets/images/army/DSC_0585.JPG";
import img7 from "/src/assets/images/army/DSC_0441.JPG";
import img8 from "/src/assets/images/army/DSC_0589.JPG";

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState({});

  const images = [
    { src: img1, alt: "Students in formation" },
    { src: img2, alt: "Tree planting activity" },
    { src: img3, alt: "Our Purpose" },
    { src: img4, alt: "School event" },
    { src: img5, alt: "Students in classroom" },
    { src: img6, alt: "School activity" },
    { src: img7, alt: "Students participating in event" },
    { src: img8, alt: "Group activity" }
  ];

  const handleImageLoad = (index) => {
    setIsLoaded(prev => ({ ...prev, [index]: true }));
  };

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = (selectedImage + direction + images.length) % images.length;
    setSelectedImage(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'ArrowLeft') navigateImage(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our School Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="grid gap-4">
            {[0, 1].map((index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative bg-gray-200 aspect-square">
                  {!isLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    className={`h-full w-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105 ${isLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                    src={images[index].src}
                    alt={images[index].alt}
                    loading="lazy"
                    onClick={() => openLightbox(index)}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid gap-4">
            {[2, 3].map((index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative bg-gray-200 aspect-square">
                  {!isLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    className={`h-full w-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105 ${isLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                    src={images[index].src}
                    alt={images[index].alt}
                    loading="lazy"
                    onClick={() => openLightbox(index)}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid gap-4">
            {[4, 5].map((index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:block hidden">
                <div className="relative bg-gray-200 aspect-square">
                  {!isLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    className={`h-full w-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105 ${isLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                    src={images[index].src}
                    alt={images[index].alt}
                    loading="lazy"
                    onClick={() => openLightbox(index)}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid gap-4">
            {[6, 7].map((index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:block hidden">
                <div className="relative bg-gray-200 aspect-square">
                  {!isLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    className={`h-full w-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105 ${isLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                    src={images[index].src}
                    alt={images[index].alt}
                    loading="lazy"
                    onClick={() => openLightbox(index)}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center items-center pt-10">
          <a
            href="/media"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg 
                      hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Full Gallery
            <svg
              className="w-5 h-5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={() => navigateImage(-1)}
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white/20"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <img 
            src={images[selectedImage].src} 
            alt={images[selectedImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button 
            onClick={() => navigateImage(1)}
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white/20"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-sm">{images[selectedImage].alt}</p>
            <p className="text-xs mt-1">{selectedImage + 1} of {images.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
