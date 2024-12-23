import React, { useState } from "react";
import bg from "/src/assets/images/bg7.jpg";

import { FaqQuestions } from "../../../assets/lists/Faq";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <img
      className="hide-img"
        src={bg}
        alt=""
        style={{
          position: "absolute",
          width: "100vw",
          marginTop: "-20vh",
          zIndex: "-1000",
          opacity: "0.5",
        }}
      />
    <div className="Faq-sectoin" style={{ margin: "3% 7%", zIndex: "100" }}>
    <h1>FAQs</h1>
    <div id="accordion-collapse" data-accordion="collapse" style={{ margin: "3rem 8vh" }}>
      {FaqQuestions.map((item, index) => (
        <div key={item.id}>
          <h2 id={`accordion-collapse-heading-${item.id}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-black rtl:text-right border  border-gray-200  dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === index ? "bg-gradient text-white" : ""
              }`}
              data-accordion-target={`#accordion-collapse-body-${item.id}`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${item.id}`}
              onClick={() => handleToggle(index)}
              style={{
                background:
                  activeIndex === index
                    ? "linear-gradient(90deg, #0b2441 10%, #0f335a 30%, #14224e 100%)"
                    : "white",
                color: activeIndex === index ? "white" : "black",
              }}
            >
              <span className="">{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === index ? "rotate-180" : ""} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${item.id}`}
            className={activeIndex === index ? "" : "hidden"}
            aria-labelledby={`accordion-collapse-heading-${item.id}`}
          >
            <div className="p-5 border border-b-2 bg-white border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500  dark:text-gray-400">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}
