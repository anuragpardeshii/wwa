import React, { useState } from 'react';
import './Difference.css'; // Make sure to create this CSS file to style your components
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Preschool = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    { title: 'Preschool Year 1', content: 'Activities and curriculum for Preschool Year 1' },
    { title: 'Preschool Year 2', content: 'Activities and curriculum for Preschool Year 2' },
    { title: 'Preschool Year 3', content: 'Activities and curriculum for Preschool Year 3' },
    { title: 'Preschool Year 4', content: 'Activities and curriculum for Preschool Year 4' },
    { title: 'Preschool Year 5', content: 'Activities and curriculum for Preschool Year 5' },
    { title: 'Preschool Year 6', content: 'Activities and curriculum for Preschool Year 6' },
    { title: 'Preschool Year 7', content: 'Activities and curriculum for Preschool Year 7' },
    { title: 'Preschool Year 8', content: 'Activities and curriculum for Preschool Year 8' },
    { title: 'Preschool Year 9', content: 'Activities and curriculum for Preschool Year 8' },
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : 0));
  };

  const startIdx = currentPage * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const currentCards = cards.slice(startIdx, endIdx);

  return (
    <div className="preschool-container">
      <img src="/src/assets/images/patternUp.jpg" style={{width: "100%"}} alt="" />

      <h1>Preschool Curriculum</h1>
      <div className="cards">
      <button className="prev-btn">
      {/* <FontAwesomeIcon icon={faChevronLeft} style={{width: "1.3rem"}} size="2x" onClick={handlePrevious} /> */}
      </button>
        {currentCards.map((card, index) => (
          <div key={index} className="card" style={{height: "20rem", maxWidth: "25rem"}}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
        <button className="prev-btn">
        {/* <FontAwesomeIcon icon={faChevronRight} style={{width: "1.3rem"}} size="2x" onClick={handleNext} /> */}
      </button>
      </div>
      <div className="pagination">
        <span className="dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span key={index} className={index === currentPage ? 'dot active' : 'dot'}>•</span>
          ))}
        </span>
      </div>
      <img src="/src/assets/images/patternDown.jpg" style={{width: "100%"}} alt="" />
    </div>
  );
};

export default Preschool;
