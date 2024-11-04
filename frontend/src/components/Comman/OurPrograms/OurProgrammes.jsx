import React, { useState } from "react";
import "./OurProgrammes.css";

const cards = [
  {
    src: "/src/assets/images/prog1.jpeg",
    text: "Play Group",
    hoverSrc: "/src/assets/images/hoverProg1.jpeg",
    hoverText: "Additional info about Play Group"
  },
  {
    src: "/src/assets/images/prog2.jpg",
    text: "Nursery",
    hoverSrc: "/src/assets/images/hoverProg2.jpg",
    hoverText: "Additional info about Nursery"
  },
  {
    src: "/src/assets/images/prog3.webp",
    text: "Junior KG",
    hoverSrc: "/src/assets/images/hoverProg3.webp",
    hoverText: "Additional info about Junior KG"
  },
  {
    src: "/src/assets/images/prog4.jpeg",
    text: "Senior KG",
    hoverSrc: "/src/assets/images/hoverProg4.jpeg",
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
    <div className="ourProgrammes">
      <h1 className="main-heading">Our Programmes</h1>
      <div className="row cards-sec">
        {cards.map((card, index) => (
          <div
            className="col" // Each card in a column, adjust width as needed
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card text-center" style={{ width: "100%" }}>
              {hoverIndex === index ? (
                <div className=" hover-card">
                  <img
                    src={card.hoverSrc}
                    className="card-img-top"
                    alt="Hover Card"
                  />
                  <div className="card-body">
                    <p className="card-text">{card.hoverText}</p>
                  </div>
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
  );
}
