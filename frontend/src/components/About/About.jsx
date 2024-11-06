import React from "react";
import "./About.css";
import InfoSection from "./InfoSection";
import OurPhilosophy from "./OurPhilosophy";

export default function About() {
  return (
    <>
      <div className="" style={{ marginTop: "10vh" }}>
        <div className="row about-section">
          <h1 className="text-center pb-2 ">About Us</h1>

          <div className="col-7">
            <h1>Wisdom World Academy</h1>
            <h4>Since 2014</h4>
            <p>
              Our Journey of Growth and Innovation Since its founding in 2014 in
              the vibrant Silicon City, Wisdom World Academy has pursued a clear
              vision: to deliver world-class education grounded in strong values
              and community commitment. Our relocation to Shiv City in 2019
              marked an exciting new chapter, where we proudly became the first
              private school in the area. With this move, we strengthened our
              ties to the community, creating a legacy of excellence and trust
              that continues to grow.
            </p>
            <p>
              What We Stand For At Wisdom World Academy, we are deeply committed
              to the transformative power of education. We believe that true
              learning extends beyond academics; it builds character, fosters
              creativity, and nurtures empathy. By prioritizing these values, we
              strive to develop well-rounded individuals prepared to take on the
              challenges of tomorrow with resilience, integrity, and vision.
            </p>
            <p>
              Join Us on This Journey Wisdom World Academy invites you to be a
              part of our educational journey—where students grow into capable,
              compassionate, and confident individuals. Together, let us build a
              future defined by innovation, integrity, and inspiration.
            </p>
          </div>
          <div className="col-3">
            <img src="/src/assets/images/logo.png" alt="" />
          </div>
          <div className="text-center join-btn">
            <button className="btn m-3 p-2">Join us today!</button>
            </div>
        </div>
        <OurPhilosophy />
        <h1 className="text-center">Mission, Vision and Values</h1>
        <InfoSection />
      </div>
    </>
  );
}
