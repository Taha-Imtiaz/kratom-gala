import React, { useState } from "react";
import "./SubscriptionsAndDiscounts.css";

const SubscriptionAndDiscounts = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    setEmail(value);
  };

  return (
    <div className="subscription-container">
      <div className="subscription-heading flex column-flex">
        <span>Subscribe to</span>
        <p> Our Discounts and Offers</p>
      </div>
      <div className="subscription-input flex">
        <input
          type="text"
          placeholder="Enter Email Address"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <div className="subscribe-btn">Subscribe</div>
      </div>
    </div>
  );
};

export default SubscriptionAndDiscounts;
