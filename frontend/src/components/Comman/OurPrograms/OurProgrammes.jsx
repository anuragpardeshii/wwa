import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import "./OurProgrammes.css";

const cards = [
  {
    src: "/src/assets/images/prog1.jpeg",
    text: "Play Group",
    hoverSrc: "/src/assets/images/h1.png",
    hoverText: "Additional info about Play Group"
  },
  {
    src: "/src/assets/images/prog2.jpg",
    text: "Nursery",
    hoverSrc: "/src/assets/images/h2.png",
    hoverText: "Additional info about Nursery"
  },
  {
    src: "/src/assets/images/prog3.webp",
    text: "Junior KG",
    hoverSrc: "/src/assets/images/h3.png",
    hoverText: "Additional info about Junior KG"
  },
  {
    src: "/src/assets/images/prog4.jpeg",
    text: "Senior KG",
    hoverSrc: "/src/assets/images/h4.png",
    hoverText: "Additional info about Senior KG"
  },
];

export default function OurProgrammes() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div>
      <img src="/src/assets/images/patternUp.jpg" style={{width: "100%"}} alt="" />
    <div className="ourProgrammes">
      <h1 className="main-heading">Our Programmes</h1>
      <div className="row cards-sec">
        {cards.map((card, index) => (
          <div
            className="col d-flex justify-content-center" // Each card in a column, adjust width as needed
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card text-center" style={{ width: "100%" }}>
              {hoverIndex === index ? (
                <div className="hover-card">
                  <h4>Preschool Year 1</h4>
                  <img src={card.hoverSrc} alt="" style={{height: "16rem", borderRadius: "2rem"}} />
                </div>
              ) : (
                <div className="original-card">
                  <img
                    src={card.src}
                    className="card-img-top"
                    alt="Original Card"
                  />
                  <div className="card-body">
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
      <img src="/src/assets/images/patternDown.jpg" style={{width: "100%"}} alt="" />
    </div>
  );
}
