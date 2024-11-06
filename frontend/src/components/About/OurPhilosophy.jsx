import "/src/components/home/Awards.css";
import React, { useRef } from "react";

export default function OurPhilosophy() {
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
      const cardWidth =
        carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div>
      <img
        src="/src/assets/images/patternUp.jpg"
        style={{ width: "100%" }}
        alt=""
      />
      <div className="awards-section">
        <h1 className="main-heading">Awards & Recognition</h1>
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
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Student-Centered Learning</h2>
                  <p>
                    Our approach places the student at the heart of the learning
                    process. We believe that every child has unique talents,
                    interests, and learning styles. By fostering a
                    student-centered environment, we encourage curiosity,
                    creativity, and self-directed learning. Our teachers serve
                    as mentors and facilitators, guiding students on a path of
                    discovery and helping them develop the skills necessary for
                    independent thought and action.
                  </p>
                </div>
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Academic Excellence</h2>
                  <p>
                    We are committed to providing a rigorous academic curriculum
                    that challenges students to reach their full potential. Our
                    programs are designed to provide a strong foundation in core
                    subjects while encouraging intellectual exploration across a
                    variety of disciplines. Through inquiry-based learning,
                    critical thinking, and problem-solving, we aim to develop
                    students who are not only knowledgeable but also capable of
                    applying their learning in real-world situations.
                  </p>
                </div>
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Innovation and Technology Integration</h2>
                  <p>
                    In today’s rapidly changing world, we recognize the
                    importance of preparing students for the future. Our
                    philosophy embraces innovation and the integration of
                    technology in the classroom. We utilize digital tools and
                    resources to enhance learning, encourage collaboration, and
                    develop digital literacy, ensuring that our students are
                    equipped to thrive in a tech-driven society. By blending
                    traditional educational values with modern practices, we
                    create an engaging and dynamic learning experience.
                  </p>
                </div>
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Character Development and Values</h2>
                  <p>
                    At Wisdom World Academy, we believe that education extends
                    beyond academics. We are deeply committed to developing
                    students' character by instilling values such as integrity,
                    responsibility, respect, and empathy. Our goal is to nurture
                    not only capable thinkers but also compassionate leaders who
                    will make positive contributions to society. We encourage
                    students to embrace diversity, practice ethical
                    decision-making, and develop a strong sense of social
                    responsibility.
                  </p>
                </div>
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Collaboration and Community</h2>
                  <p>
                    Education is a collaborative effort, and we view our school
                    as a vibrant community of students, teachers, parents, and
                    staff working together to create an enriching experience. We
                    foster a supportive, inclusive environment where everyone’s
                    voice is heard, and teamwork is valued. Our students
                    actively engage in community-building activities, where they
                    develop leadership skills and learn the importance of
                    collaboration in achieving common goals.
                  </p>
                </div>
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Lifelong Learning</h2>
                  <p>
                    At Wisdom World Academy, we emphasize the importance of
                    becoming lifelong learners. We equip our students with the
                    skills they need to adapt to the ever-changing world,
                    encouraging a love for learning that continues beyond their
                    school years. By developing skills in self-reflection,
                    resilience, and adaptability, we prepare our students to
                    navigate the challenges of life and grow through every
                    experience.
                  </p>
                </div>
                <div className="super-peek-card center-peek-heading" style={{minWidth: "25rem"}}>
                  <h2>Balanced Development</h2>
                  <p>
                    We believe that academic success should be complemented by
                    emotional, social, and physical development. Our curriculum
                    encourages students to participate in extracurricular
                    activities, sports, and the arts, providing opportunities to
                    explore their passions, build confidence, and develop
                    well-rounded personalities. We understand the importance of
                    mental and emotional well-being, and we prioritize creating
                    a safe, supportive environment where students can thrive
                    both academically and personally.
                  </p>
                </div>
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
      <img
        src="/src/assets/images/patternDown.jpg"
        style={{ width: "100%" }}
        alt=""
      />
    </div>
  );
}
