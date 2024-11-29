import React, { useState } from "react";
import "./PreschoolProgram.css";
import Faq from "../../Comman/Faq/Faq.jsx";
import "/src/components/Difference/Difference.css"; // Make sure to create this CSS file to style your components
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PreschoolProgram = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      title: "Play-Based Learning",
      content:
        "We believe that play is the foundation of early learning. Through structured and free play, children develop essential skills like problem-solving, creativity, and teamwork while having fun.",
    },
    {
      title: "Creative Exploration",
      content:
        "Art, music, and storytelling sessions let children express themselves creatively. These activities enhance fine motor skills and encourage self-expression, building a strong foundation for future learning.",
    },
    {
      title: "Social & Emotional Growth",
      content:
        "Our teachers guide children in learning how to share, cooperate, and communicate with their peers. Through group activities, children build friendships and develop empathy, preparing them for collaborative learning.",
    },
    {
      title: "Hands-On Activities",
      content:
        "From building blocks to sensory play, our preschoolers engage in hands-on experiences that strengthen their motor skills, spatial awareness, and curiosity about the world around them.",
    },
    {
      title: "Outdoor Play & Physical Development",
      content:
        "Outdoor play is a big part of our program, promoting physical activity and an appreciation for nature. Our playgrounds and garden areas provide a safe space for exploration and movement.",
    },
    {
      title: "Caring & Qualified Teachers",
      content:
        "Our preschool teachers are trained to nurture and support each child’s unique development journey. With warmth and patience, they create an environment where children feel valued, understood, and encouraged to explore their interests.",
    },
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : totalPages - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : 0
    );
  };

  const startIdx = currentPage * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const currentCards = cards.slice(startIdx, endIdx);

  return (
    <>
      <div className="preschool-section" style={{ marginTop: "10vh" }}>
        <div className="col best-preschool">
          <h1>Best PreSchool For Your Child</h1>
          <p>
            Our Preschool Program is designed to foster curiosity, creativity,
            and a love for learning in young children. We create a warm, safe,
            and engaging environment where each child can explore, grow, and
            thrive. Through age-appropriate activities, hands-on experiences,
            and guided exploration, our program encourages children to discover
            the world around them, express themselves, and build foundational
            skills for future learning.
          </p>
        </div>
        <div className="col preschool-img">
          <img src="/src/assets/images/difference2.jpg" alt="" />
        </div>
      </div>
      <div className="preschool-container">
        <img
          src="/src/assets/images/patternUp.jpg"
          style={{ width: "100%" }}
          alt=""
        />
        <h1>What We Offer</h1>
        <div className="cards">
          <button className="prev-btn">
            {/* <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ width: "1.3rem" }}
              size="2x"
              onClick={handlePrevious}
            /> */}
          </button>
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ height: "30rem", maxWidth: "35rem" }}
            >
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
          <button className="prev-btn">
            {/* <FontAwesomeIcon
              icon={faChevronRight}
              style={{ width: "1.3rem" }}
              size="2x"
              onClick={handleNext}
            /> */}
          </button>
        </div>
        <div className="pagination">
          <span className="dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={index === currentPage ? "dot active" : "dot"}
              >
                •
              </span>
            ))}
          </span>
        </div>
        <img
          src="/src/assets/images/patternDown.jpg"
          style={{ width: "100%" }}
          alt=""
        />
      </div>
      <Faq />
    </>
  );
};

export default PreschoolProgram;
