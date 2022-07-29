import React from "react";
import { HiHeart } from "react-icons/hi";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>
          &copy; All Rights Reserved. Made with <HiHeart color="#F70707" /> by Alex
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
