import "./Awards.css";
import React, { useRef } from "react";

export default function Awards() {
  const carouselRef = useRef(null);

  // Sample data array for awards
  const cards = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID1",
      title: "Award Title 1",
      description: "Description for award 1.",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID2",
      title: "Award Title 2",
      description: "Description for award 2.",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID3",
      title: "Award Title 3",
      description: "Description for award 3.",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID3",
      title: "Award Title 3",
      description: "Description for award 3.",
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID3",
      title: "Award Title 3",
      description: "Description for award 3.",
    },
    {
      id: 6,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID3",
      title: "Award Title 3",
      description: "Description for award 3.",
    },
    {
      id: 7,
      videoUrl: "https://www.youtube.com/embed/sampleVideoID3",
      title: "Award Title 3",
      description: "Description for award 3.",
    },
    // Add more cards as needed
  ];

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <img src="/src/assets/images/patternUp.jpg" style={{width: "100%"}} alt="" />
    <div className="awards-section">
      <h1 className="text-center p-4" style={{color: "white"}}>Awards & Recognition</h1>
      <div className="awards row">
            <div className="super-peek">
              <div className="super-peek-wrapper">
                <button className="super-peek-button prev" onClick={handlePrev}>
                  <img
                    src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
                    alt="Previous"
                  />
                </button>

                <div className="super-peek-cards" ref={carouselRef}>
                  {cards.map((data) => (
                    <div key={data.id} className="super-peek-card">
                      <div className="super-peek-image-container">
                        <img src="/src/assets/images/awards.png" alt="" />
                      </div>
                      <h2>{data.title}</h2>
                      {data.description && <p>{data.description}</p>}
                    </div>
                  ))}
                </div>

                <button className="super-peek-button next" onClick={handleNext}>
                  <img
                    src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
                    alt="Next"
                  />
                </button>
              </div>
            </div>
          </div>
    </div>
    <img src="/src/assets/images/patternDown.jpg" style={{width: "100%"}} alt="" />
    </div>
  );
}
