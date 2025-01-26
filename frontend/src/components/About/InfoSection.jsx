import React from "react";
import "./About.css"; // Import the CSS file

// Import images
import missionImage from "/src/assets/images/mission.jpeg";
import visionImage from "/src/assets/images/vission.jpeg";
import valuesImage from "/src/assets/images/values.jpeg";

const InfoSection = () => {
  return (
    <div className="cards-info flex flex-wrap" style={{ margin: "2% 8%" }}>
      <a
        href="#"
        className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Mission
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Our mission is to empower all students to embrace learning, build
          their analytical abilities, self-confidence, will power, goal setting
          competencies and achieve their personal best.
        </p>
      </a>

      <a
        href="/about-us"
        className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Vision
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Our vision is to prepare and motivate our students to pursue their
          aspirations and contribute to the world. Our goal is to develop
          student’s ability to think and act by utilizing their knowledge,
          experience, understanding, common sense, and insight.
        </p>
      </a>

      {/* <a
        href="#"
        className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Values
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a> */}
    </div>
  );
};

export default InfoSection;
