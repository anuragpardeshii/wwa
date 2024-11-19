import React from "react";
import "./About.css"; // Import the CSS file

const InfoSection = () => {
  return (
    <div className="cards-info" style={{ margin: "5rem 8vh"}}>
      <div className="info-cards text-center">
        <div className="info-card-border">
          <div className="info-bg text-center">
            <img src="/src/assets/images/mission.jpeg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            suscipit in ab minima cupiditate error aut neque exercitationem
            asperiores nam.
          </p>
        </div>
      </div>
      <div className="info-cards text-center">
        <div className="info-card-border">
          <div className="info-bg text-center">
            <img src="/src/assets/images/vission.jpeg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            suscipit in ab minima cupiditate error aut neque exercitationem
            asperiores nam.
          </p>
        </div>
      </div>
      <div className="info-cards text-center">
        <div className="info-card-border">
          <div className="info-bg text-center">
            <img src="/src/assets/images/values.jpeg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            suscipit in ab minima cupiditate error aut neque exercitationem
            asperiores nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
