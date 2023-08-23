import React from "react";
import "./KratomCategoryItem.css";
const KratomCategoryItem = ({ title, ...item }) => {
  console.log(title, item);
  const { type, image } = item;
  return (
    <div className="category-image column-flex">
      <img src={image} alt="" />
      <div className="flex item-title">{title}</div>
      <div className="flex item-type">{type}</div>
    </div>
  );
};

export default KratomCategoryItem;
