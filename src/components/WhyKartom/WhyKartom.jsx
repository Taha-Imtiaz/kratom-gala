import React from "react";
import "./WhyKartom.css";
import WhyKartomList from "../WhyKartomList/WhyKartomList";
const WhyKartom = () => {
  return (
    <div className="why-kartom-container">
      <div className="kartom-content">
        <div className="kartom-heading">Why Kratom</div>
        <div className="why-kartom-list">
          <WhyKartomList/>
        </div>
      </div>
    </div>
  );
};

export default WhyKartom;
