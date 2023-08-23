import React from "react";
import "./KratomCategories.css";
import { kratomCategories, krotamTitle } from "../../mockData/KratomCategories";
import KratomCategoryItem from "../KratomCategoryItem/KratomCategoryItem";

const KratomCategories = ({ title }) => {
  return (
    <div className="kratom-categories-container">
      <div className="title flex">
        {title} <span>&nbsp;{`Categories`}</span>
      </div>
      <div className="categories-data">
        <div className="category-items">
          {kratomCategories.map((item, i) => (
            <KratomCategoryItem key={item.id} title={krotamTitle} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KratomCategories;
