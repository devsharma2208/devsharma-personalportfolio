import React from "react";
import "./Web_Image.css";
import { useSelector } from "react-redux";

const Web_Image = () => {
  const selector = useSelector((state) => state.theme);
  return (
    <div className="img-content" id={`${!selector && "webimage"}`}>
      <div className="image-container" data-aos="flip-up">
        <img
          src="https://rithikeshh-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffarzad-p-xSl33Wxyc-unsplash.ed3c34b0.jpg&w=384&q=75"
          alt="webimg"
        />
        <img
          src="https://rithikeshh-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclark-tibbs-oqStl2L5oxI-unsplash.e9fa98a2.jpg&w=384&q=75"
          alt="webimg"
        />
        <img
          src="https://rithikeshh-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.0c3af11f.webp&w=384&q=75"
          alt="webimg"
        />
        <img
          src="https://rithikeshh-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclint-patterson-dYEuFB8KQJk-unsplash.d78b5bd4.jpg&w=384&q=75"
          alt="webimg"
        />
        <img
          src="https://rithikeshh-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.a3a1c795.webp&w=384&q=75"
          alt="webimg"
        />
      </div>
    </div>
  );
};

export default Web_Image;
