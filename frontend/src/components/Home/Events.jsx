import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "School Picnic 2024",
    date: "March 15, 2024",
    description: "Students enjoyed a day full of fun activities and bonding at the annual school picnic.",
    photos: [
      "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#0f335a] text-center mb-12"
        >
          School Events Gallery
        </motion.h1>

        {events.map((event, eventIndex) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: eventIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-[#0f335a] mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-700 mb-6">{event.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {event.photos.map((photo, photoIndex) => (
                <motion.div
                  key={photoIndex}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo}
                    alt={`${event.title} photo ${photoIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </motion.div>
  );
};

export default Gallery;