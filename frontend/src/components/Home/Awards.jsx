import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChild, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import "../Comman/OurPrograms/OurProgrammes.css";
import patternUp from "/src/assets/images/wave-up.svg";
import patternDown from "/src/assets/images/wave-down.svg";
import prog1 from "/src/assets/images/prog1.jpeg";
import { Trophy, Award, Medal, Crown } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best School Award 2023",
    description:
      "Recognized for excellence in education and innovative teaching methodologies by the National Education Board.",
  },
  {
    icon: Award,
    title: "100% Academic Excellence",
    description:
      "Consistently achieving outstanding academic results with all students securing top grades in board examinations.",
  },
  {
    icon: Medal,
    title: "Sports Champions",
    description:
      "Winner of the Inter-School Sports Championship for 5 consecutive years, fostering physical excellence.",
  },
  {
    icon: Crown,
    title: "Environmental Initiative",
    description:
      "Awarded for our commitment to environmental education and sustainable practices in school operations.",
  },
];

export default function Awards() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  function AchievementCard({ icon: Icon, title, description }) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 mx-auto">
          <Icon className="w-8 h-8 text-[#0f335a]" />
        </div>
        <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    );
  }

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div>
      <img
        src={patternUp}
        style={{ width: "100%", marginBottom: "-1%" }}
        alt="Pattern Up"
        loading="lazy"
      />
      <div className="ourProgrammes">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1
                className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Rewards & Recognition
              </h1>
            </div>
            <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-[#0f335a]">100%</p>
                    <p className="text-gray-600">Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#0f335a]">50+</p>
                    <p className="text-gray-600">Awards Won</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#0f335a]">1000+</p>
                    <p className="text-gray-600">Students</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#0f335a]">25+</p>
                    <p className="text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <img
        src={patternDown}
        style={{ width: "100%", marginTop: "-1%" }}
        alt="Pattern Down"
        loading="lazy"
      />
    </div>
  );
}
