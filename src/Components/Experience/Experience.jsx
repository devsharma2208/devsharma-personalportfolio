import React from "react";
import "./Experience.css";
import { useSelector } from "react-redux";
const Experience = () => {
    const selector = useSelector((state) => state.theme);
  return (
    <div className="dsafasdf" id={`${!selector ? "experience" : "light"}`}>
      <div>
        <h1>Experience</h1>
      </div>
      <div className="exp">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVjSuL8sih_5J8_gEYoIYoYRb38lPt8KG7g&s"
            alt="byteworld"
          />
        </div>
        <div>
          <h3>Front end Developer</h3>
          <p>Byteworld IT Services Full-time</p>
        </div>
      </div>
      <div className="exp-1">
        <p>March,2024 - June,2024 - 3 month, 18 days</p>
        <p>Gurugram, Haryana, India - On-Site</p>
      </div>
    </div>
  );
};

export default Experience;
