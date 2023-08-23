import React from "react";
import "./MainPageContent.css";
import KratomOverview from "../KratomOverview/KratomOverview";
import KratomAbout from "../KratomAbout/KratomAbout";
import KratomCategories from "../KratomCategories/KratomCategories";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import AboutKrotam from "../AboutKratom/AboutKratom";
import KratomBrands from "../KratomBrands/KratomBrands";
import WhyKartom from "../WhyKartom/WhyKartom";
import HappyClients from "../HappyClients/HappyClients";
import SubscriptionAndDiscounts from "../SubscriptionAndDiscounts/SubscriptionAndDiscounts";
import ContactUs from "../ContactUs/ContactUs";

const MainPageContent = () => {
  return (
    <div className="main-content-container">
      <div className="kratom-overview-container">
        <KratomOverview />
        <KratomAbout />
      </div>
      <div className="kratom-categories">
        <KratomCategories title="Kratom Extract" />
      </div>
      <div className="shop-by-category">
        <ShopByCategory categoryName={`Capsule`} />
      </div>
      <div className="about-krotam">
        <AboutKrotam />
      </div>
      <div className="shop-by-category">
        <ShopByCategory categoryName={`Liquid`} />
      </div>
      <div className="shop-by-category">
        <ShopByCategory categoryName={`Powder`} />
      </div>
      <div className="brands">
        <KratomBrands />
      </div>
      <div className="why-kartom">
        <WhyKartom />
      </div>
      <div className="clients">
        <HappyClients />
      </div>
      <div className="subscription-and-discounts">
        <SubscriptionAndDiscounts />
      </div>
      <div className="contact-us">
        <ContactUs />
      </div>
    </div>
  );
};

export default MainPageContent;
