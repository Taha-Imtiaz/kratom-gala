import React from "react";
import "./ShopByCategory.css";
import { kratomCategories, krotamTitle } from "../../mockData/KratomCategories";
import KratomCategoryItem from "../KratomCategoryItem/KratomCategoryItem";
import ShopByCategoryItem from "../ShopByCategoryItem/ShopByCategoryItem";
import { ShopByCategories } from "../../mockData/KratomCapsulesData";

const ShopByCategory = ({ categoryName }) => {
  return (
    <div className="shop-categories-container">
      <div className="categoryTitle flex">
        {`Shop By Kratom`} <span>&nbsp;{categoryName}</span>
      </div>
      <div className="shop-categories-data">
        <div className="shop-category-items">
          {ShopByCategories.map((item, i) => (
            <ShopByCategoryItem key={item.id}  {...item} />
          ))}
        </div>
      </div>
      <div className="order-btn flex">ORDER KRATOM NOW</div>

      </div>
  );
};

export default ShopByCategory;
