import React, { useEffect } from "react";
import "./Project.css";
import Goibibo from "../../Images/Goibibo.png";
import Reddit from "../../Images/Reddit.png";
import Amazon from "../../Images/Amazon.png";
import Mathpartner from "../../Images/Mathpartner.png";

import {
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useSelector } from "react-redux";
const Projects = () => {
  const selector = useSelector((state) => state.theme);
  useEffect(() => {
    Aos.init({
      // disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="project_container" id={`project${!selector && "-dark"}`}>
      <h1 className="contentName">
        <span data-aos="fade-right">Proj</span>
        <span data-aos="fade-left">ects</span>
      </h1>
      <div className="project-con">
        <div
          className="project "
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-down-right"
        >
          <div className="project-details">
            <h3>Goibibo Clone</h3>
            <p>React JS</p>
            <img src={Goibibo} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Flights, Hotels, Bus Booking.</li>
              <li>User Authentication, Protected routes.</li>
              <li>
                After successful booking it show success modal and Search
                Flights, Hotels & Trains.
              </li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://goibibo-clone-react-project-1-sobnc222vpo4.vercel.app/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Goibibo-Clone---React-Project-1---sobnc222vpo4"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="project"
          id={`${!selector && "project-dark-part"}`}
          data-aos="flip-left"
        >
          <div className="project-details">
            <h3>Reddit Clone</h3>
            <p>React JS</p>
            <img src={Reddit} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>
                Create post, Create group, Like a post, Comment on a post.
              </li>
              <li>User Authentication, Protected routes.</li>
              <li>
                Join Group, Search posts, Premium, Dark mode, Check profile.
              </li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://reddit-react-clone-react-project-2-m2j8eo3lwprp.vercel.app/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Reddit-React-Clone---React-Project-2---m2j8eo3lwprp"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="project"
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-down-left"
        >
          <div className="project-details">
            <h3>Amazon Clone </h3>
            <p>React JS</p>
            <img src={Amazon} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Select Item, Add item to cart.</li>
              <li>User Authentication, Protected routes.</li>
              <li>Remove item from cart.</li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link to="https://amazon-clon-tau.vercel.app/" target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Amazon-Clon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="project "
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-up-right"
        >
          <div className="project-details">
            <h3>Math Partner </h3>
            <p>React JS</p>
            <img src={Mathpartner} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Flights, Hotels, Bus Booking.</li>
              <li>User Authentication, Protected routes.</li>
              <li>
                After successful booking it show success modal and Search
                Flights, Hotels & Trains.
              </li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://devsharma2208.github.io/Maths-Partner---Javascript-Project---uzjmvs3tiq0m/s"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Maths-Partner---Javascript-Project---uzjmvs3tiq0m"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="project "
          id={`${!selector && "project-dark-part"}`}
          data-aos="flip-right"
        >
          <div className="project-details">
            <h3>Goibibo Clone</h3>
            <p>React JS</p>
            <img src={Goibibo} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Flights, Hotels, Bus Booking.</li>
              <li>User Authentication, Protected routes.</li>
              <li>
                After successful booking it show success modal and Search
                Flights, Hotels & Trains.
              </li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://rithikesh-make-my-trip-react-clone.vercel.app/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Goibibo-Clone---React-Project-1---sobnc222vpo4"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="project"
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-up-left"
        >
          <div className="project-details">
            <h3>Goibibo Clone</h3>
            <p>React JS</p>
            <img src={Goibibo} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Flights, Hotels, Bus Booking.</li>
              <li>User Authentication, Protected routes.</li>
              <li>
                After successful booking it show success modal and Search
                Flights, Hotels & Trains.
              </li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://rithikesh-make-my-trip-react-clone.vercel.app/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Goibibo-Clone---React-Project-1---sobnc222vpo4"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
