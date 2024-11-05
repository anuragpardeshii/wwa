import "./Pioneers.css";

const cards = [
  {
    img: "/src/assets/images/awards.png",
    title: "30+",
    text: "Years in preschool education",
  },
  {
    img: "/src/assets/images/awards.png",
    title: "130+",
    text: "Preschools Globally",
  },
  {
    img: "/src/assets/images/awards.png",
    title: "2,00,000+",
    text: "Students Nurtured",
  },
  {
    img: "/src/assets/images/awards.png",
    title: "6",
    text: "Countries",
  },
];

export default function Pioneers() {
  return (
    <div className="container-fluid pioneers-section">
      <div className="row align-items-center">
        <div className="col-lg-6 content-section">
          <h1>Pioneers in Preschool Education</h1>
          <p className="text-muted">
            Wisdom World Academy has a remarkable journey, beginning with its establishment in 2014 in Silicon City and later relocating to Shiv City in 2019, where it proudly became the first private school in the area.
          </p>
          <p className="text-muted">
            At Wisdom World Academy, we believe in the transformative power of education, innovation, and character development. These pillars come together to mold the leaders of tomorrow, instilling in them not only knowledge but also the values and skills they need to navigate the challenges of the future.
          </p>
          <p className="section-title">Mission:</p>
          <p className="text-muted">
            Our mission is to empower all students to embrace learning, build their analytical abilities, self-confidence, willpower, goal-setting competencies, and achieve their personal best.
          </p>
          <p className="section-title">Vision:</p>
          <p className="text-muted">
            Our vision is to prepare and motivate our students to pursue their aspirations and contribute to the world. Our goal is to develop students' ability to think and act by utilizing their knowledge, experience, understanding, common sense, and insight.
          </p>
        </div>

        <div className="col-lg-6 cards-section">
          <div className="row">
            {cards.map((card, index) => (
              <div className="col-6 d-flex justify-content-center mb-3" key={index}>
                <div className="card text-center" style={{ width: "15rem", height: "15rem" }}>
                  <div className="card-body">
                    <img src={card.img} alt={card.title} className="card-image" />
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="iframe-section mt-4">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/-X7okpS9Ufc"
          title="poorna classroom demonstration English"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
