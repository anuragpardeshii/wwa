import React, { useState } from 'react';
import './Difference.css'; // Make sure to create this CSS file to style your components

const Preschool = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    { title: 'Preschool Year 1', content: 'Activities and curriculum for Preschool Year 1' },
    { title: 'Preschool Year 2', content: 'Activities and curriculum for Preschool Year 2' },
    { title: 'Preschool Year 3', content: 'Activities and curriculum for Preschool Year 3' },
  ];

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < cards.length - 1 ? prevPage + 1 : 0));
  };

  return (
    <div className="preschool-container">
      <h1>Preschool Curriculum</h1>
      <div className="card">
        <h2>{cards[currentPage].title}</h2>
        <p>{cards[currentPage].content}</p>
      </div>
      <div className="pagination">
        <button onClick={handlePrevious}>Previous</button>
        <span className="dots">
          {cards.map((_, index) => (
            <span key={index} className={index === currentPage ? 'dot active' : 'dot'}>•</span>
          ))}
        </span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Preschool;
