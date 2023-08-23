import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });
  const handleChangeInput = (e) => {
    let { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, additionalInfo } = co;
  };
  return (
    <div className="contact-us-container">
      <div className="pill-image"></div>
      <div className="contact-form">
        <h2 className="contact-us-heading">Contact Us</h2>
        <div className="contact-us-content">
          We are happy to answer your questions, and help you find the services
          you need. Please message us to get started.
        </div>
        <div className="contact-form-content-container">
          <form>
            <div className="contact-form-content">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChangeInput}
                  value={contactForm.firstName}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChangeInput}
                  value={contactForm.lastName}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChangeInput}
                  value={contactForm.email}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChangeInput}
                  value={contactForm.phone}
                />
              </div>
              <textarea
                name="additionalInfo"
                rows="7"
                placeholder="Additional Info"
                onChange={handleChangeInput}
                value={contactForm.additionalInfo}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
