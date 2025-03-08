import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of Alex, Grade 5",
    content: "Wisdom World Academy has transformed my child's learning experience. The personalized attention and innovative teaching methods have helped Alex develop a genuine love for learning.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent of Emma, Grade 3",
    content: "The dedication of teachers at Wisdom World Academy is exceptional. They go above and beyond to ensure each child reaches their full potential.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Parent of twins, Grade 4",
    content: "Having twins with different learning styles was challenging, but the academy's approach has helped both my children excel in their unique ways.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Parent of Sophie, Grade 6",
    content: "The holistic development approach at Wisdom World Academy has helped Sophie become more confident and creative in her pursuits.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "Parent of Jack, Grade 2",
    content: "The support system here is incredible. From academic guidance to emotional well-being, they take care of every aspect of child development.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Parent of Hannah, Grade 5",
    content: "We've seen remarkable improvement in Hannah's academic performance and social skills since joining Wisdom World Academy.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 3 >= testimonials.length) ? 0 : prevIndex + 3
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-45 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-6xl font-bold text-[#0f335a] mb-4"
          >
            What Parents Say
          </h2>
          <p
            className="text-lg text-gray-600"
          >
            Discover why families choose Wisdom World Academy for their children's education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
              <Quote className="w-10 h-10 text-[#ffc300] mb-6" />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="font-semibold text-[#0f335a]">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * 3)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                Math.floor(currentIndex / 3) === idx
                  ? 'bg-indigo-500'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}