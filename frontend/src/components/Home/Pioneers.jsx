import React from 'react';
import { GraduationCap, Star, Brain, Shield } from 'lucide-react';
// import children from "/public/DSC_0484.jpg";

export default function Pioneers() {
  return (
    <div>
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center mb-12">
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nurturing Young Minds at the{' '}
              <span className="text-[#0f335a]">#1 Preschool</span>
            </h1>
            <p
              className="text-2xl text-[#0f335a] font-semibold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Wisdom World Academy - Best School for Holistic Education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative">
              <img
                src="/DSC_0484.jpg"
                loading="lazy"
                alt="Children learning"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-8 h-8 text-[#0f335a]" />
                  <div>
                    <p className="text-2xl font-bold text-[#0f335a]">25+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                At Wisdom World Academy, we bring years of excellence in providing world-class education. 
                Our schools have earned accolades, awards, and appreciation from both parents and students. 
                With highly trained educators, we ensure a strong foundation for academic and personal growth, 
                fostering an environment that is safe, nurturing, and intellectually stimulating for young minds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="bg-white p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Brain className="w-8 h-8 text-[#0f335a] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Leading Institution
                  </h3>
                  <p className="text-gray-600">
                    Built on trust and unwavering commitment to quality education and innovative learning methodologies.
                  </p>
                </div>
                <div
                  className="bg-white p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <GraduationCap className="w-8 h-8 text-[#0f335a] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Comprehensive Curriculum
                  </h3>
                  <p className="text-gray-600">
                    Designed to ignite a lifelong love for learning with modern teaching methodologies.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#0f335a] mb-4">
                  Progressive Learning Approach
                </h3>
                <p className="text-gray-600">
                  Our unique curriculum empowers students to become independent thinkers, problem solvers, 
                  and future leaders through a blend of modern teaching methodologies and brain-based research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}