import React, { useState } from "react";
import { X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Mother of a Grade 3 Student",
    videoUrl: "https://www.youtube.com/embed/3jWRrafhO7M",
    thumbnail:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80",
    testimonial:
      "I love how the school fosters creativity and critical thinking in my child!",
  },
  {
    id: 2,
    name: "James Patel",
    role: "Father of a Grade 5 Student",
    videoUrl: "https://www.youtube.com/embed/8c4KqtH3GEE",
    thumbnail:
      "https://images.unsplash.com/photo-1573496546038-1e4cdbad6ff5?auto=format&fit=crop&q=80",
    testimonial:
      "The STEM programs here are incredible! My son is now excited about coding and robotics.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mother of a Preschooler",
    videoUrl: "https://www.youtube.com/embed/2Xc9gXyf2G4",
    thumbnail:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
    testimonial:
      "The early learning program is fantastic. My daughter has become more confident and social.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Father of a High School Student",
    videoUrl: "https://www.youtube.com/embed/V74l_zS1x8E",
    thumbnail:
      "https://images.unsplash.com/photo-1595433707802-419ef8f40b5c?auto=format&fit=crop&q=80",
    testimonial:
      "The college prep resources provided by the school have been a game-changer for my son.",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Mother of a Grade 1 Student",
    videoUrl: "https://www.youtube.com/embed/dOZOnLWBdUo",
    thumbnail:
      "https://images.unsplash.com/photo-1526637700000-58d8c83c687c?auto=format&fit=crop&q=80",
    testimonial:
      "The teachers genuinely care about students' progress, and it shows in my child's enthusiasm!",
  },
  {
    id: 6,
    name: "Ryan Carter",
    role: "Father of a Middle Schooler",
    videoUrl: "https://www.youtube.com/embed/GEMuAnFH_lM",
    thumbnail:
      "https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&q=80",
    testimonial:
      "I appreciate how the school supports students in balancing academics and extracurriculars.",
  },
  {
    id: 7,
    name: "Aisha Ahmed",
    role: "Mother of a Kindergarten Student",
    videoUrl: "https://www.youtube.com/embed/jzF_y039slk",
    thumbnail:
      "https://images.unsplash.com/photo-1549057446-9f5c6ac91a1c?auto=format&fit=crop&q=80",
    testimonial:
      "My son has improved so much in reading and writing within just a few months!",
  },
  {
    id: 8,
    name: "John Williams",
    role: "Father of a Grade 2 Student",
    videoUrl: "https://www.youtube.com/embed/H6F2bLNKZ_o",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-deb4988c514b?auto=format&fit=crop&q=80",
    testimonial:
      "The school's approach to hands-on learning makes studying fun and engaging for my child.",
  },
  {
    id: 9,
    name: "Linda Scott",
    role: "Mother of a High School Senior",
    videoUrl: "https://www.youtube.com/embed/Pa9s8-LH5J8",
    thumbnail:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    testimonial:
      "The guidance counselors have been so helpful in preparing my daughter for college applications.",
  },
];

const ParentsSpeak = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl font-bold text-[#0f335a] text-center mb-12"
        >
          What Parents Say About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <img
                src={testimonial.thumbnail}
                alt={testimonial.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

          {selectedTestimonial && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            >
              <div
                className="bg-white rounded-lg p-4 w-full max-w-3xl relative"
              >
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={selectedTestimonial.videoUrl}
                    title={`Testimonial from ${selectedTestimonial.name}`}
                    className="w-full h-[400px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ParentsSpeak;
