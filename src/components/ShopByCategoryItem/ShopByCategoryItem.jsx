import React from "react";
import "./ShopByCategoryItem.css";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";
import LockIcon from "../../assets/images/bag copy 4.png"

const ShopByCategoryItem = (item) => {
  const { text, price, image, id, fullPrice } = item;
  return (
    <div className="shop-by-category-image column-flex">
      <img src={image} alt="" />
      <div className="flex shop-item-title">{text}</div>
      <div className="star-rating">
        <StarRatingComponent />
      </div>
      <div className= {"flex shop-item-type"}>
        {id % 3 === 0 && <span className="show-full-price">{fullPrice} </span> } &nbsp;&nbsp;
        {price}
      </div>
     {id % 3=== 0 && <div className="add-to-cart flex">
      <img className="lock-icon" src={LockIcon} alt="" />
        Add to Cart
        </div>}
    </div>
  );
};

export default ShopByCategoryItem;
