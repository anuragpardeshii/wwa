import React, { useRef, useState, useEffect } from "react";
import patternUp from "/src/assets/images/patternUp.jpg";
import patternDown from "/src/assets/images/patternDown.jpg";

const AwardCard = ({ title, description, imgSrc, link }) => (
  <div
    className="super-peek-card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style={{ minWidth: "20rem" }}
  >
    <a href={link}>
      <img className="rounded-t-lg" src={imgSrc} alt={title} />
    </a>
    <div className="p-5">
      <a href={link}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        aria-label={`Read more about ${title}`}
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
      </a>
    </div>
  </div>
);

export default function Awards() {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCardWidth(carouselRef.current.querySelector(".super-peek-card").offsetWidth);
    }
  }, []);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -(cardWidth + 20), behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
    }
  };

  const cardData = [
    {
      title: "Award 1",
      description: "Description for Award 1",
      imgSrc: "image1.jpg",
      link: "link1"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    {
      title: "Award 2",
      description: "Description for Award 2",
      imgSrc: "image2.jpg",
      link: "link2"
    },
    
    // Add more awards as needed
  ];

  return (
    <div>
      <img src={patternUp} style={{ width: "100%" }} alt="Pattern Up" />
      <div className="awards-section">
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-3xl">
          Awards & Recognition
        </h1>
        <div className="awards row">
          <div className="super-peek">
            <div className="super-peek-wrapper">
              <button
                className="super-peek-button prev"
                onClick={handlePrev}
                aria-label="Scroll left"
              >
                <img
                  src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
                  alt="Previous"
                />
              </button>
              <div
                className="super-peek-cards"
                ref={carouselRef}
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  gap: "20px",
                }}
              >
                {cardData.map((card, index) => (
                  <AwardCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    imgSrc={card.imgSrc}
                    link={card.link}
                  />
                ))}
              </div>
              <button
                className="super-peek-button next"
                onClick={handleNext}
                aria-label="Scroll right"
              >
                <img
                  src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={patternDown} style={{ width: "100%" }} alt="Pattern Down" />
    </div>
  );
}