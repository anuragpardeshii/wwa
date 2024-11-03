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
    title: "2,00,000 +",
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
    <>
      <div className="row container-fluid pioneers-section">
        <div className="col content-section">
          <h1>Pioneers in Preschool Education</h1>
          <h2>India's most desired preschool brand</h2>
          <p>
            In 1993, Kangaroo Kids International Preschool pioneered a whole new
            concept in learning as we knew that the conventional rote system of
            learning would not equip children with skills and abilities for the
            dawn of a new age of information.
          </p>
          <p>
            We believe that children learn best when they are given a choice and
            voice within an emotionally safe environment. They blossom when they
            are nurtured by those who have their best interests at heart and use
            evidence-based teaching-learning strategies that are supported by
            years of research and up-to-date methods.
          </p>
        </div>
        
        <div className="col row cards-section">
          {cards.map((card, index) => (
            <div className="col-6 center-div" key={index}>
              <div className="card text-center m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img src={card.img} alt={card.title} style={{ width: "100px", height: "100px" }} />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="iframe-section">
          <iframe
            width="853"
            src="https://www.youtube.com/embed/-X7okpS9Ufc"
            title="poorna classroom demonstration English"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
