import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download our app for Android and iOS devices</p>
        <img src={playStore} alt="Play Store" />
        <img src={appStore} alt="App Store" />
      </div>

      <div className="midFooter">
        <h1>SNEHAL STORE</h1>
        <p>Your one-stop shop for quality products</p>
        <p>© 2026 Snehal Labade. All Rights Reserved.</p>
      </div>

      <div className="rightFooter">
        <h4>About</h4>
        <p>Developed as a MERN stack learning project.</p>
      </div>

    </footer>
  );
};

export default Footer;

