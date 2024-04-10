import React from "react";

import DevImage from "../../Images/DevImage2.png";
import "./Info.css";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
const Info = () => {
  const selector = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      className="info_container"
      id={`${!selector && "darktheme-info"}`}
      onClick={() =>
        dispatch({ type: "HEMBURGUR_MENU", hemburgur_Menu: false })
      }
    >
      <div className="animate__animated animate__lightSpeedInLeft text">
        <p className="dev-role">A Passonate Frontend Developer</p>
        <div>
          <span className="text-xl ">👋 Hey There ,</span>
          <br />
          <span className="text-xl-name">
            I'm <b> Dev</b>
          </span>
        </div>
      </div>
      <div className="animate__animated animate__fadeInDown user-Image">
        <div className="gfddjkds">
          <img
            className="img-user"
            src={DevImage}
            alt="image"
            // height={600}
            // width={500}
          />
        </div>
      </div>
      <div className="dev-text-jk animate__animated animate__lightSpeedInRight text">
        <p className="skil-pa">I create dynamic</p>
        <b className="web-app">Web Applications.</b>
      </div>
    </div>
  );
};

export default Info;
