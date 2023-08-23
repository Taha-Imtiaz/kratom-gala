import React from "react";
import "./KratomBrandItem.css";

const KratomBrandItem = ({ ...item }) => {
  const { image } = item;
  return (
    <div className="brand-image">
      <img src={image} alt="" />
    </div>
  );
};

export default KratomBrandItem;
