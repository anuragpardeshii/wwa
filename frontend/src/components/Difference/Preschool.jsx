import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChild, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import prog1 from "/src/assets/images/prog1.jpeg";
import "../Comman/OurPrograms/OurProgrammes.css";
import patternUp from "/src/assets/images/wave-up.svg";
import patternDown from "/src/assets/images/wave-down.svg";


export default function Preschool() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div>
      <img src={patternUp} style={{ width: "100%", marginBottom: "-1%" }} alt="Pattern Up" />
      <div className="ourProgrammes" style={{ padding: "5% 3%" }}>
        <h1 className="mb-10 text-white text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl" style={{color: "white"}}>
          Empowering Minds, Shaping Futures
        </h1>

        <div className="flex justify-center items-center gap-4 flex-wrap px-4">
          <div
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nursery
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our Nursery Class nurtures curiosity and creativity in
                2.5-3.5-year-olds through play, stories, songs, and sensory
                activities in a vibrant setting.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </a> */}
            </div>
          </div>

          <div
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  LKG (Lower Kindergarter)
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our LKG Class nurtures 3.5-4.5-year-olds with literacy,
                numeracy, problem-solving, confidence, and self-expression.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </a> */}
            </div>
          </div>
          <div
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  UKG (Upper Kindergarten)
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our UKG Class prepares 4.5-5.5-year-olds for primary school with
                interactive learning, creative projects, technology, and a
                strong academic foundation.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </a> */}
            </div>
          </div>
          <div
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Primary
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The Primary Section at Wisdom World fosters academic excellence,
                creativity, and character building for lifelong learning.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <img src={patternDown} style={{ width: "100%", marginTop: "-1%" }} alt="Pattern Down" />
    </div>
  );
}
