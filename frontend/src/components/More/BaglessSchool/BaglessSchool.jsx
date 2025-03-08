import React from 'react';
import { BookOpen, Brain, Smile } from 'lucide-react';

const BaglessSchool = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#0f335a] text-center mb-8">
          Welcome to Wisdom World Academy's Bagless School Initiative!
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-8"
          >
            At Wisdom World Academy, we believe in nurturing the intellectual and emotional growth of every child through 
            innovative and progressive educational practices. Our Bagless School initiative is designed to bring joy and 
            simplicity to learning by eliminating the need for heavy school bags and promoting a more holistic, 
            stress-free learning environment.
          </p>

          <p
            className="text-lg text-gray-700 leading-relaxed"
          >
            Our Bagless School program aims to reduce the physical and mental burden of carrying heavy backpacks filled 
            with books, stationery, and other materials. By transitioning to a lighter, more efficient model of learning, 
            we encourage students to embrace a more interactive and focused educational experience. This initiative supports 
            the well-being of our students while fostering a deeper connection with their studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Digital Learning Resources",
              description: "Access to comprehensive digital materials and interactive content"
            },
            {
              icon: Brain,
              title: "Innovative Teaching Methods",
              description: "Focus on practical learning and hands-on experiences"
            },
            {
              icon: Smile,
              title: "Stress-Free Environment",
              description: "Creating a more enjoyable and comfortable learning experience"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="h-12 w-12 text-[#0f335a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaglessSchool;