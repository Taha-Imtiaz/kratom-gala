import React from "react";
import "./WhyKartomListItem.css";
const WhyKartomListItem = (item) => {
  const { image, text, subText } = item;
  return (
    <div>
      <div className="kratom-list-item-image">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="kratom-text">{text}</div>
      <div className="kratom-subtext">{subText}</div>
    </div>
  );
};

export default WhyKartomListItem;
