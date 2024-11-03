import "./OurProgrammes.css";

const card = [
    {
        src: "/src/assets/images/prog1.jpeg",
        text: "Play Group",
    },
    {
        src: "/src/assets/images/prog2.jpg",
        text: "Nursery",
    },
    {
        src: "/src/assets/images/prog3.webp",
        text: "Junior KG",
    },
    {
        src: "/src/assets/images/prog4.jpeg",
        text: "Senior KG",
    },
]


export default function OurProgrammes() {
  return (
    <>
      <h1>Our Programmes</h1>
      <div className="card-container " style={{ width: "18rem" }}>
      {card.map((card, index) => (
        <div className="col card original-content" key={index}>
          <img src={card.src} className="card-img-top" alt="Original Card" />
          <div className="card-body">
            <p className="card-text">
              {card.text}
            </p>
          </div>
        </div>
      ))}
        <div className="card hover-content">
          <img src="..." className="card-img-top" alt="Hover Card" />
          <div className="card-body">
            <p className="card-text">
              This is the hover content, which appears when you hover over the card.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
