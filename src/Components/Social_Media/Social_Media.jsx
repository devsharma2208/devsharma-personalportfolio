import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Social_Media.css";
import { useSelector } from "react-redux";

const Social_Media = () => {
  const selector = useSelector((state) => state.theme);
  return (
    <div
      className="social-Media-Container"
      id={`${!selector && "social-dark"}`}
    >
      <div>
        <Link to="mailto:devsharmaelc@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      <div>
        <Link to="https://www.instagram.com/devsharma3233/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
      <div>
        <Link to="https://github.com/devsharma2208" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <div>
        <Link
          to="https://www.linkedin.com/in/dev-sharma-007301173/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </div>
  );
};

export default Social_Media;
