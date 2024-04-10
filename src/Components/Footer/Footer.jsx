import React from "react";
import "./Footer.css";
import ParallaxText from "./ParallaxText ";
import { useSelector } from "react-redux";

const Footer = () => {
  const selector = useSelector((state) => state.theme);
  return (
    <div className="footerContainer" id={`${!selector && "footer-dark"}`}>
      <div>
        <ParallaxText baseVelocity={-5}>
          Tech stack used to build this protfolio:- React.js, Redux, CSS, React
          spring, Framer motion, Aos.
        </ParallaxText>
        {/* <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText> */}
      </div>
      <div>
        <div className="deadLine"></div>
        <div className="lastText">
          <p>&copy; 2024 Dev Sharma. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
