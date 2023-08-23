import React, { Fragment } from "react";
import "./AboutContent.css";
const AboutContent = () => {
  return (
    <Fragment>
      <div className="about-heading">About</div>
      <div className="about-main">Kratom Gala</div>
      <div className="main-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="book-now flex">Book Now</div>
    </Fragment>
  );
};

export default AboutContent;
