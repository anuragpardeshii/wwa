// ImageSlider.jsx

import React, { useState } from 'react';
import '/src/styles/ImageSlider.css'; // CSS for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-button" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="slider-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="slider-button" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
