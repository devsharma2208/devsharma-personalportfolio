import React from "react";
import "./Hembger_menu.css";
import { Link } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hembger_menu = () => {
  const toggle = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="hemb-container" id={`${toggle && "light-theme"}`}>
      <ul>
        <li>
          <Link
            activeClass="active"
            to={`${!toggle ? "about-dark" : "aboutfalse"}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={() => {
              dispatch({
                type: "HEMBURGUR_MENU",
                hemburgur_Menu: false,
              });
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={`${!toggle ? "skills-dark" : "skillfalse"}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={() => {
              dispatch({
                type: "HEMBURGUR_MENU",
                hemburgur_Menu: false,
              });
            }}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={`${!toggle ? "project-dark" : "projectfalse"}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={() => {
              dispatch({
                type: "HEMBURGUR_MENU",
                hemburgur_Menu: false,
              });
            }}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to={`${!toggle ? "contact-dark" : "contactfalse"}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={() => {
              dispatch({
                type: "HEMBURGUR_MENU",
                hemburgur_Menu: false,
              });
            }}
          >
            Contact
          </Link>
        </li>
        <div className="number">
          <div>
            <FontAwesomeIcon icon={faPhoneVolume} />
          </div>
          <p>+91 7668776421</p>
        </div>
      </ul>
    </div>
  );
};

export default Hembger_menu;
