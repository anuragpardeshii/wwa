import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Pre-defined events data
const events = [
  {
    id: 1,
    title: "School Picnic 2024",
    date: "March 15, 2024",
    description: "Students enjoyed a day full of fun activities and bonding at the annual school picnic.",
    photos: [
      "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 2,
    title: "Annual Function 2024",
    date: "February 20, 2024",
    description: "A spectacular showcase of our students' talents through various performances.",
    photos: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    title: "Sports Day 2024",
    date: "January 25, 2024",
    description: "A day of athletic excellence and sportsmanship.",
    photos: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80"
    ]
  }
];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Handle image preloading
  useEffect(() => {
    const preloadImages = () => {
      events.forEach((event, eventIndex) => {
        event.photos.forEach((photo, photoIndex) => {
          const img = new Image();
          img.src = photo;
          img.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [`${eventIndex}-${photoIndex}`]: true
            }));
          };
        });
      });
    };
    
    preloadImages();
  }, []);

  // Open lightbox with specific image
  const openLightbox = (eventIndex, photoIndex) => {
    setSelectedImage(events[eventIndex].photos[photoIndex]);
    setCurrentImageIndex(photoIndex);
    setCurrentEventIndex(eventIndex);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction) => {
    const currentEvent = events[currentEventIndex];
    const newIndex = (currentImageIndex + direction + currentEvent.photos.length) % currentEvent.photos.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentEvent.photos[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'ArrowLeft') navigateImage(-1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, currentEventIndex]);

  return (
    <div>
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0f335a] text-center mb-12">
            School Events Gallery
          </h1>

          {events.map((event, eventIndex) => (
            <div key={event.id} className="mb-16">
              <h2 className="text-2xl font-semibold text-[#0f335a] mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700 mb-6">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {event.photos.map((photo, photoIndex) => (
                  <div
                    key={photoIndex}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    onClick={() => openLightbox(eventIndex, photoIndex)}
                  >
                    <div className="relative bg-gray-100 h-64">
                      {!imagesLoaded[`${eventIndex}-${photoIndex}`] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img
                        src={photo}
                        alt={`${event.title} photo ${photoIndex + 1}`}
                        loading="lazy"
                        className={`w-full h-64 object-cover transition-transform duration-300 hover:scale-105 ${
                          imagesLoaded[`${eventIndex}-${photoIndex}`] ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-10"
                  aria-label="Close lightbox"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Previous button */}
                <button
                  onClick={() => navigateImage(-1)}
                  className="absolute left-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Image */}
                <img
                  src={selectedImage}
                  alt={`${events[currentEventIndex].title} enlarged view`}
                  className="max-h-[85vh] max-w-full object-contain"
                />

                {/* Next button */}
                <button
                  onClick={() => navigateImage(1)}
                  className="absolute right-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  <p className="text-lg font-medium">{events[currentEventIndex].title}</p>
                  <p className="text-sm mt-1">
                    {currentImageIndex + 1} of {events[currentEventIndex].photos.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;