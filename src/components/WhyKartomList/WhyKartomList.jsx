import React from "react";
import "./WhyKartomList.css";
import { kartomData } from "../../mockData/whyKartomData";
import WhyKartomListItem from "../WhyKartomListItem/WhyKartomListItem";
const WhyKartomList = () => {
  return <div className="kartom-list-container">
    {kartomData.map((item, i)=> <WhyKartomListItem key={item.id} {...item}/>)}
  </div>
};

export default WhyKartomList;
