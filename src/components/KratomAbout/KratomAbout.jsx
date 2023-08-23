import React from "react";
import "./KratomAbout.css";
import Vector from "../../assets/images/Vector Smart Object.png"

const KratomAbout = () => {
  return (
    <div className="kratom-about-wrapper">
      <div className="kratom-about-image">
        <div className="image-inner-heading column-flex">
          <span> ABOUT </span>
          <span className="heading-span">KRATOM GALA</span>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>

      <div className="kratom-about-content column-flex">
        <img className="vector-image" src={Vector} alt="" />
        <div className="content-description">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <div className="discover-more-btn ">Discover More</div>
      </div>
    </div>
  );
};

export default KratomAbout;
