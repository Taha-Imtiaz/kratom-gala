import React from "react";
import "./Header.css";
import Logo from "./../../assets/images/Group 8.png";
import Search from "./../../assets/images/Group 19.png";
import bag from "./../../assets/images/bag.png";
import count from "./../../assets/images/02.png";
import account from "./../../assets/images/account.png";

const Header = () => {
  return (
    <div className="header">
      <div className="top-header flex">
        FREE SHIPPING when you order $75 or more!
      </div>
      <div className="main-header">
        <div className="logo">
          <img src={Logo} alt="" srcSet="" />
        </div>
        <div className="search-input flex">
          <input type="text" placeholder="Search Products." />
          <div className="search-btn">
            <img className="search-icon" src={Search} alt="" />
            Search
          </div>
        </div>
        <div className="notification-icon flex">
          <img src={bag} alt="" />
          <img className="notification-count" src={count} alt="" />
        </div>
        <div className="profile-icon flex">
          <img src={account} alt="" />
        </div>
      </div>
      <div className="header-links">
        <div className="left-header-links">
          Kratom Powders&nbsp; Kratom Capsules&nbsp; Liquid Kratom&nbsp; Kratom
          Extracts&nbsp; Brands
        </div>
        <div className="about">About Us</div>
        <div className="contact">Contact Us</div>
        <div className="blog">Blog</div>
      </div>
    </div>
  );
};

export default Header;
