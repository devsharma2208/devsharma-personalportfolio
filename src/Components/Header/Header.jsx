import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import {
  faMoon,
  faPhoneVolume,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const toggle = useSelector((state) => state.theme);
  const hemburgur_Menu = useSelector((state) => state.hemburgur_Menu);
  const dispatch = useDispatch();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
        behavior: "smooth",
      }}
      animate={hidden ? "hidden" : "visibel"}
      className="header"
      id={`${!toggle && "darktheme"}`}
    >
      <div>
        <h1 className="name">Dev Sharma</h1>
      </div>
      <div className="content">
        <Link
          activeClass="active"
          to={`${!toggle ? "about-dark" : "aboutfalse"}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="links"
          id={`${!toggle && "darktheme-a"}`}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to={`${!toggle ? "skills-dark" : "skillfalse"}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="links"
          id={`${!toggle && "darktheme-a"}`}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to={`${!toggle ? "project-dark" : "projectfalse"}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="links"
          id={`${!toggle && "darktheme-a"}`}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to={`${!toggle ? "contact-dark" : "contactfalse"}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="links"
          id={`${!toggle && "darktheme-a"}`}
        >
          Contact
        </Link>
        <div
          className="theme-con"
          id={`${!toggle && "darkicon"}`}
          onClick={() => {
            dispatch({
              type: "THEMETOGGLE",
            });
          }}
        >
          {toggle ? (
            <FontAwesomeIcon className="moon-sun" icon={faMoon} />
          ) : (
            <FontAwesomeIcon className="moon-sun sun" icon={faSun} />
          )}
          {/* <img
            src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sun-and-Moon-PNG/Transparent_Smiling_Sun_PNG_Clipart_Picture.png?m=1434276794"
            alt="sun"
            width={20}
          /> */}
        </div>
      </div>
      <div className="phonecalls">
        <p>+91 7668776421</p>
        <div>
          <FontAwesomeIcon icon={faPhoneVolume} />
        </div>
      </div>
      {!hemburgur_Menu ? (
        <button
          className="hembger-menu"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            dispatch({
              type: "HEMBURGUR_MENU",
              hemburgur_Menu: true,
            });
          }}
          id={`${!toggle && "dark-hemb"}`}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
              fill="currentColor"
            ></path>
            <path
              d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
              fill="currentColor"
            ></path>
            <path
              d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="hembger-menu fdfdfsdfd"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            dispatch({
              type: "HEMBURGUR_MENU",
              hemburgur_Menu: false,
            });
          }}
          id={`${!toggle && "dark-hemb"}`}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </motion.nav>
  );
};

export default Header;
