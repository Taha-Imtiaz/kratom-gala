import React from "react";
import "./Footer.css";
import Logo from "./../../assets/images/Group 8.png";
import RoundedRectangle1 from "./../../assets/images/Rounded Rectangle 1.png";
import emptyImage from "./../../assets/images/empty.png";
import Layer2 from "./../../assets/images/Layer 2.png";
import Layer3 from "./../../assets/images/Layer 3.png";
import Layer4 from "./../../assets/images/Layer 4.png";
import Layer5 from "./../../assets/images/Layer 5.png";
import Layer6 from "./../../assets/images/Layer 6.png";
import Layer7 from "./../../assets/images/Layer 7.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-upper-content">
          <div className="footer-dummy-text">
            <img src={Logo} alt="" srcset="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div>Follow Us</div>
            <div className="icons">
              <img src={RoundedRectangle1} alt=""></img>
              <img src={emptyImage} alt=""></img>
              <img src={emptyImage} alt=""></img>
              <img src={emptyImage} alt=""></img>
            </div>
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            <ul className="quick-links-list">
              <li>Warranty Policy </li>
              <li>Returns & Refunds Shipping</li>
              <li>Terms & Conditions</li>
              <li>Purchase Order</li>
              <li>Policy Sitemap</li>
            </ul>
          </div>
          <div className="about-links">
            <p></p>
            <ul className="about-links-list">
              <li>About Us </li>
              <li>Contact Us</li>
              <li>Krotam</li>
              <li>Extracts</li>
              <li>Brands</li>
            </ul>
          </div>
          <div>
            <div className="address-links">
              <p>Address</p>
              <ul className="address-links-list">
                <li>123- 456-7890 </li>
                <li>support@yourdomain.com</li>
                <li>location_on3346 Molino Irvine CA 92618</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-disclaimer">
          <h2>Disclaimer</h2>
          <p>
            Our content is not intended to provide medical advice, diagnosis or
            treatment. The information we provide does not constitute a medical
            consultation, and the products we offer are not intended to
            diagnose, treat, cure, or prevent any disease. The statements made
            about our products have not been evaluated by the Food and Drug
            Administration (FDA), and their efficacy has not been confirmed by
            FDA-approved research. It is important to note that the information
            provided here is not a substitute for professional medical advice.
            Additionally, our products are not for sale or use by individuals
            under the age of 21. KratomGala.com does not endorse and is not
            responsible for any User Content. We are unable to ship our products
            to the following states, cities, and counties where kratom is
            prohibited: Alabama, Arkansas, Indiana, Rhode Island, Tennessee,
            Vermont, Wisconsin, Sarasota County, Union County, Denver, San
            Diego, Jerseyville IL, Oceanside CA, and Ontario OR. Moreover, we
            cannot ship to countries where kratom is banned, including
            Australia, Burma, Denmark, Finland, Israel, Lithuania, Malaysia,
            Myanmar, Poland, Romania, South Korea, Sweden, Thailand, United
            Kingdom, and Vietnam.
          </p>
          <div className="copy-right-row">
            <div>Copyright © 2023 All Rights Reserved</div>
            <p className="flex">Payment method</p>
            <img src={Layer7} alt="" />
            <img src={Layer3} alt="" />
            <img src={Layer4} alt="" />
            <img src={Layer2} alt="" />
            <img src={Layer5} alt="" />
            <img src={Layer6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
