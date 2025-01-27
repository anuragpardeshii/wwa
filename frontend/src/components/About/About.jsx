import React from "react";
import "./About.css";
import OurStory from "./OurStory";
import Slogan from "./Slogan";
import InfoSection from "./InfoSection";
import aboutBg from "/src/assets/images/aboutbg.png";
import OurPhilosophy from "./OurPhilosophy";
import logoImage from "/src/assets/images/logo.jpg"; // Import the logo image
import { GraduationCap, BookOpen, Clock, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <div>
        {/* <Slogan /> */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
              {/* Logo Section */}
              <div className="w-full lg:w-1/3 flex flex-col items-center">
                <img
                  src={logoImage} // Use the imported image variable here
                  alt="Wisdom World Academy Logo"
                  className="p-8 px-16"
                  style={{ width: "25rem" }}
                />
                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold text-[#0f335a]">
                    Wisdom World Academy
                  </h3>
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
              <div className="w-full lg:w-2/3">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nurturing Young Minds, <br />
                  <span className="text-[#0f335a]">
                    Shaping Bright Futures
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Our Journey of Growth and Innovation Since its founding in
                    2014 in the vibrant Silicon City, Wisdom World Academy has
                    pursued a clear vision: to deliver world-class education
                    grounded in strong values and community commitment. Our
                    relocation to Shiv City in 2019 marked an exciting new
                    chapter, where we proudly became the first private school in
                    the area. With this move, we strengthened our ties to the
                    community, creating a legacy of excellence and trust that
                    continues to grow.
                  </p>

                  <p>
                    What We Stand For At Wisdom World Academy, we are deeply
                    committed to the transformative power of education. We
                    believe that true learning extends beyond academics; it
                    builds character, fosters creativity, and nurtures empathy.
                    By prioritizing these values, we strive to develop
                    well-rounded individuals prepared to take on the challenges
                    of tomorrow with resilience, integrity, and vision.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-[#0f335a] mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-600">
                        Our mission is to empower all students to embrace
                        learning, build their analytical abilities,
                        self-confidence, will power, goal setting competencies
                        and achieve their personal best.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-[#0f335a] mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-600">
                      Our vision is to prepare and motivate our students to pursue their
          aspirations and contribute to the world. Our goal is to develop
          student’s ability to think and act by utilizing their knowledge,
          experience, understanding, common sense, and insight.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-[#0f335a]">
                        250+
                      </div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-[#0f335a]">
                        30+
                      </div>
                      <div className="text-sm text-gray-600">
                        Expert Teachers
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-[#0f335a]">
                        15:1
                      </div>
                      <div className="text-sm text-gray-600">
                        Student-Teacher Ratio
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-[#0f335a]">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">
                        Parent Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <img className="hide-img bg-contain" src={aboutBg} alt="" style={{position: "absolute", width: "100vw", zIndex: "-1000", opacity: "0.5", marginTop: "-10vh"}} /> */}
        {/* <h2 className="text-4xl text-center medium-text font-extrabold dark:text-white">
          Wisdom World Academy
        </h2>
        <p className="my-4 text-gray-500 text-center">Since 2014</p>
        <div className="flex flex-wrapping flex-column justify-evenly items-center max-w-6xl p-4 mx-auto">
          <img
            src={logoImage} // Use the imported image variable here
            alt="Wisdom World Academy Logo"
            className="p-8 px-16"
            style={{ width: "25rem" }}
          />
          <div>
            <p className="mb-4 mt-4 text-sm font-normal  lg:text-xl">
              Our Journey of Growth and Innovation Since its founding in 2014 in
              the vibrant Silicon City, Wisdom World Academy has pursued a clear
              vision: to deliver world-class education grounded in strong values
              and community commitment. Our relocation to Shiv City in 2019
              marked an exciting new chapter, where we proudly became the first
              private school in the area. With this move, we strengthened our
              ties to the community, creating a legacy of excellence and trust
              that continues to grow.
            </p>
            <p className="mb-4 mt-4 text-sm font-normal  lg:text-xl">
              What We Stand For At Wisdom World Academy, we are deeply committed
              to the transformative power of education. We believe that true
              learning extends beyond academics; it builds character, fosters
              creativity, and nurtures empathy. By prioritizing these values, we
              strive to develop well-rounded individuals prepared to take on the
              challenges of tomorrow with resilience, integrity, and vision.
            </p>
            <a
              href="#"
              className="inline-flex items-center  text-blue-600 dark:text-blue-500 hover:underline "
            >
              <p className="small-text mb-4 mt-4 text-lg font-bold font-normal lg:text-lg">
                Join us
              </p>
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          </div> */}
        {/* </div> */}
        {/* <InfoSection /> */}
        {/* <OurPhilosophy /> */}
        {/* <OurStory /> */}
      </div>
    </>
  );
}
