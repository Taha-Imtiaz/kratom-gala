import React from "react";
import "./KratomBrands.css";
import KratomBrandList from "../KratomBrandsList/KratomBrandList";

const KratomBrands = () => {
  return (
    <div className="brands-container">
      <div className="brand-heading flex">
        Our best <span>&nbsp;Kratom brands</span>
      </div>
      <div className="brand-list">
        <div className="kratom-brand-list-container">
          <KratomBrandList />
        </div>
      </div>
      <div className="three-dots flex">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default KratomBrands;
