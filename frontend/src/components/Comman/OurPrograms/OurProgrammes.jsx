import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChild, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import prog1 from "/src/assets/images/prog1.jpeg";
import "./OurProgrammes.css";
import patternUp from "/src/assets/images/wave-up.svg";
import patternDown from "/src/assets/images/wave-down.svg";
import "./OurProgrammes.css";

export default function OurProgrammes() {
  const classes = [
    {
      title: "Nursery",
      ageGroup: "Age: 2.5-3.5 years",
      description:
        "Our Nursery Class nurtures curiosity and creativity in 2.5-3.5-year-olds through play, stories, songs, and sensory activities in a vibrant setting.",
      imageUrl: prog1,
    },
    {
      title: "LKG",
      ageGroup: "Age: 3.5-4.5 years",
      description:
        "Our LKG Class nurtures 3.5-4.5-year-olds with literacy, numeracy, problem-solving, confidence, and self-expression.",
      imageUrl: prog1,
    },
    {
      title: "UKG",
      ageGroup: "Age: 4.5-5.5 years",
      description:
        "Our UKG Class prepares 4.5-5.5-year-olds for primary school with interactive learning, creative projects, technology, and a strong academic foundation.",
      imageUrl: prog1,
    },
    {
      title: "Primary",
      ageGroup: "Age: 5.5+ years",
      description:
        "The Primary Section at Wisdom World fosters academic excellence, creativity, and character building for lifelong learning.",
      imageUrl: prog1,
    },
  ];

  function ClassCard({ title, description, imageUrl, ageGroup }) {
    return (
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{ageGroup}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <section className="">
      <img
        src={patternUp}
        style={{ width: "100%", marginBottom: "-1%" }}
        alt="Pattern Up"
      />
      <div className="mx-auto px-4 ourProgrammes">
        <div className="text-center my-8">
          <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Empowering Minds, Shaping Futures
          </h1>
        </div>
        <div className="grid max-w-7xl mx-auto my-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {classes.map((classInfo, index) => (
            <ClassCard key={index} {...classInfo} />
          ))}
        </div>
      </div>
      <img
        src={patternDown}
        style={{ width: "100%", marginTop: "-1%" }}
        alt="Pattern Down"
      />
    </section>
  );
}
