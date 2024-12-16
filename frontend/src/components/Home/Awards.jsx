import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChild, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import "../Comman/OurPrograms/OurProgrammes.css";
import patternUp from "/src/assets/images/wave-up.svg";
import patternDown from "/src/assets/images/wave-down.svg";

const cards = [
  {
    src: "/src/assets/images/prog1.jpeg",
    text: "Play Group",
    hoverSrc: "/src/assets/images/h1.png",
    hoverText: "Additional info about Play Group",
  },
  {
    src: "/src/assets/images/prog2.jpg",
    text: "Nursery",
    hoverSrc: "/src/assets/images/h2.png",
    hoverText: "Additional info about Nursery",
  },
  {
    src: "/src/assets/images/prog3.webp",
    text: "Junior KG",
    hoverSrc: "/src/assets/images/h3.png",
    hoverText: "Additional info about Junior KG",
  },
  {
    src: "/src/assets/images/prog4.jpeg",
    text: "Senior KG",
    hoverSrc: "/src/assets/images/h4.png",
    hoverText: "Additional info about Senior KG",
  },
];

export default function Awards() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div>
      <img src={patternUp} style={{ width: "100%" }} alt="Pattern Up" />
      <div className="ourProgrammes" style={{ padding: "2% 5%" }}>
        <h1 class="mb-10 text-white text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl  ">
          Awards & Recognition
        </h1>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <div
            class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              
            </div>
          </div>

          <div
            class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              
            </div>
          </div>
          <div
            class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              
            </div>
          </div>
          <div
            class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ maxWidth: "20rem" }}
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/images/prog1.jpeg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <img src={patternDown} style={{ width: "100%" }} alt="Pattern Down" />
    </div>
  );
}
