import React from "react";
import "./AboutKratom.css";
import AboutImg from "./../../assets/images/Rectangle 6 copy.png";
import AboutContent from "../AboutContent/AboutContent";

const AboutKratom = () => {
  return (
    <div className="about-kratom-container">
      <div className="about-image">
        <img src={AboutImg} alt="" />
      </div>
      <div className="kratom-content column-flex">
        <AboutContent/>

      </div>
    </div>
  );
};

export default AboutKratom;
