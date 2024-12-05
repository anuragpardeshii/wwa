import React from "react";
import "./About.css";
import OurStory from "./OurStory";
import Slogan from "./Slogan";
import InfoSection from "./InfoSection";
import OurPhilosophy from "./OurPhilosophy";
import logoImage from "/src/assets/images/logo.png"; // Import the logo image

export default function About() {
  return (
    <>
      <div style={{ marginTop: "10vh" }}>
        <Slogan />
        <div
          className="flex justify-center items-center"
          style={{ margin: "3rem 8vw" }}
        >
          <div>
            <h2 className="text-4xl font-extrabold dark:text-white">
              Wisdom World Academy
            </h2>
            <p className="my-4 text-lg text-gray-500">Since 2014</p>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              Our Journey of Growth and Innovation Since its founding in 2014 in
              the vibrant Silicon City, Wisdom World Academy has pursued a clear
              vision: to deliver world-class education grounded in strong values
              and community commitment. Our relocation to Shiv City in 2019
              marked an exciting new chapter, where we proudly became the first
              private school in the area. With this move, we strengthened our
              ties to the community, creating a legacy of excellence and trust
              that continues to grow.
            </p>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              What We Stand For At Wisdom World Academy, we are deeply committed
              to the transformative power of education. We believe that true
              learning extends beyond academics; it builds character, fosters
              creativity, and nurtures empathy. By prioritizing these values, we
              strive to develop well-rounded individuals prepared to take on the
              challenges of tomorrow with resilience, integrity, and vision.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
            >
              Join us
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
          </div>
          <div className="px-5">
            <img
              src={logoImage} // Use the imported image variable here
              alt="Wisdom World Academy Logo"
              style={{ minWidth: "20rem" }}
            />
          </div>
        </div>
        <InfoSection />
        <OurPhilosophy />
        <OurStory />
      </div>
    </>
  );
}
