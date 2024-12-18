import React from "react";
import "./About.css"; // Import the CSS file

// Import images
import missionImage from "/src/assets/images/mission.jpeg";
import visionImage from "/src/assets/images/vission.jpeg";
import valuesImage from "/src/assets/images/values.jpeg";

const InfoSection = () => {
  return (
    <div className="cards-info flex flex-wrap" style={{ margin: "5% 8%" }}>
      <div className="info-cards text-center">
        <div className="info-card-border">
          <div className="info-bg text-center">
            <img src={missionImage} alt="Mission" />
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
            <img src={visionImage} alt="Vision" />
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
            <img src={valuesImage} alt="Values" />
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
