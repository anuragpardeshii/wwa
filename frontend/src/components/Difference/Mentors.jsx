import { useState } from "react";
import "./Difference.css";
import { teacherReviews } from "/src/assets/data/teacherReviews.js";

function Mentors() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Top Global Experts Section */}
      <div className="mentor-review py-8">
        <h1>Meet Our Teachers & Guides</h1>
        <h4 className="p-5 pt-0 max-w-6xl" style={{margin: "auto"}}>
          Our dedicated team of educators is here to inspire and support every
          student on their learning journey. From experienced teachers to
          passionate mentors, each member brings unique expertise and a love for
          teaching that goes beyond the classroom.
        </h4>

        <div
          className="mentor-list"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`mentor-cards ${isHovered ? "paused" : ""}`}>
            {teacherReviews.map((data) => (
              <div key={data.id} className="mentor-card">
                <div className="mentor-image-part">
                  <img src={data.img} loading="lazy" alt="teacher-review" />
                  <div>
                    <h3>{data.name}</h3>
                    <h6>{data.position}</h6>
                  </div>
                </div>
                <div className="mentor-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentors;
