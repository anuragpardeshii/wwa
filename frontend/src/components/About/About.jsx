import React from "react";
import "./About.css";
import logoImage from "/src/assets/images/logo.jpg";
import { BookOpen, Clock, Award } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function About() {
  return (
    <div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div variants={fadeIn} className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* Logo Section */}
          <div variants={fadeIn} className="w-full lg:w-1/3 flex flex-col items-center">
            <img
              src={logoImage}
              alt="Wisdom World Academy Logo"
              className="p-8 px-16"
              style={{ width: "25rem" }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold text-[#0f335a]">Wisdom World Academy</h3>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <BookOpen className="w-5 h-5" />
                  <span>Est. 2014</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>11 Years of Excellence</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Award className="w-5 h-5" />
                  <span>NAEYC Accredited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div variants={fadeIn} className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nurturing Young Minds, <br />
              <span className="text-[#0f335a]">Shaping Bright Futures</span>
            </h2>
            <div variants={staggerContainer} className="space-y-6 text-lg text-gray-600">
              <p variants={fadeIn}>
                Since its founding in 2014 in the vibrant Silicon City, Wisdom World Academy has pursued a clear vision: to deliver world-class education grounded in strong values and community commitment. Our relocation to Shiv City in 2019 marked an exciting new chapter, where we proudly became the first private school in the area. With this move, we strengthened our ties to the community, creating a legacy of excellence and trust that continues to grow.
              </p>
              <p variants={fadeIn}>
                At Wisdom World Academy, we are deeply committed to the transformative power of education. We believe that true learning extends beyond academics; it builds character, fosters creativity, and nurtures empathy. By prioritizing these values, we strive to develop well-rounded individuals prepared to take on the challenges of tomorrow with resilience, integrity, and vision.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div variants={fadeIn} className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#0f335a] mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    Our mission is to empower all students to embrace learning, build their analytical abilities, self-confidence, will power, goal setting competencies, and achieve their personal best.
                  </p>
                </div>
                <div variants={fadeIn} className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#0f335a] mb-2">Our Vision</h3>
                  <p className="text-gray-600 ">
                    Our vision is to prepare and motivate our students to pursue their aspirations and contribute to the world. Our goal is to develop student’s ability to think and act by utilizing their knowledge, experience, understanding, common sense, and insight.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div variants={fadeIn} className="p-4 bg-gray-50 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0f335a]">250+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div variants={fadeIn} className="p-4 bg-gray-50 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0f335a]">30+</div>
                  <div className="text-sm text-gray-600">Expert Teachers</div>
                </div>
                <div variants={fadeIn} className="p-4 bg-gray-50 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0f335a]">15:1</div>
                  <div className="text-sm text-gray-600">Student-Teacher Ratio</div>
                </div>
                <div variants={fadeIn} className="p-4 bg-gray-50 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#0f335a]">98%</div>
                  <div className="text-sm text-gray-600">Parent Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}