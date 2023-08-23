import React from "react";
import "./KratomOverview.css";
import Pill from "../../assets/images/PillImage.png"
const KratomOverview = () => {
  return (
    <div className="kratom-overview-wrapper">
      <div className="kratom-overview-content">
        <div className="kratom-heading column-flex">
          <span className="green-head">KRATOM </span>
          <span>FOR SALE</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="kratom-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </div>
        <div className="shop-now-btn">Shop Now</div>
      </div>
      <div className="kratom-overview-image">
        <img src={Pill} alt="" srcset="" />
      </div>
    
    </div>
  );
};

export default KratomOverview;
