import React from "react";
import "./HappyClients.css";
import quoteIcon from "./../../assets/images/inverted-commas.png";
import LeftArrowIcon from "./../../assets/images/right-arrow copy.png";
import RightArrowIcon from "./../../assets/images/right-arrow.png";
import Avatar from "./../../assets/images/Ellipse 1.png";

const HappyClients = () => {
  return (
    <div className="happy-clients-container">
      <div className="quote-icon flex">
        <img src={quoteIcon} alt="" />
      </div>
      <div className="clients-heading flex">
        Our Happy <span>&nbsp;Clients</span>
      </div>
      <div className="clients-description flex">
        <img src={LeftArrowIcon} alt="" />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <img src={RightArrowIcon} alt="" srcset="" />
      </div>
      <div className="avatar flex column-flex">
        <img src={Avatar} alt="" srcset="" />
        <p>Anderson Jam</p>
      </div>
    </div>
  );
};

export default HappyClients;
