import React from "react";
import Icon1 from "../assets/Crypto-images/chart-icon.svg";
import Icon2 from "../assets/Crypto-images/user-icon.svg";
import Icon3 from "../assets/Crypto-images/world-icon.svg";
import Image from "../assets/Crypto-images/why-img.png";
const FirstSection = () => {
  return (
    <div className="firstSection">
      <div className="firstSection__intro">
        <div className="firstSection__item">
          <img src={Icon1} />
          <div className="firstSection__itemText">
            <h3>$30B</h3>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>
        <div className="firstSection__item">
          <img src={Icon2} />
          <div className="firstSection__itemText">
            <h3>10M+</h3>
            <p>Trusted Wallets Investor</p>
          </div>
        </div>
        <div className="firstSection__item">
          <img src={Icon3} />
          <div className="firstSection__itemText">
            <h3>195</h3>
            <p>Countries Supported</p>
          </div>
        </div>
      </div>
      <div className="firstSection__main">
        <div className="firstSection__image">
          <img src={Image} />
        </div>
        <div className="firstSection__mainContent">
          <h2>Why you should choose CRAPPO</h2>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <a href="/#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
