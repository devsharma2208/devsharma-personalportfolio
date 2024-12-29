import React from "react";
import "./Project.css";
import Goibibo from "../../Images/Goibibo.png";
import Reddit from "../../Images/Reddit.png";
import Amazon from "../../Images/Amazon.png";
import Intractive from "../../Images/IntractiveWeb.png";
import backend from "../../Images/backend1.jpg";
// import TodoListApp from "../../Images/todolist2.png";
import HeadGen from "../../Images/headGen.jpeg";

import {
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Projects = () => {
  const selector = useSelector((state) => state.theme);
  return (
    <div className="project_container" id={`project${!selector && "-dark"}`}>
      <h1 className="contentName">
        <span data-aos="fade-right" data-aos-duration="1000">
          Proj
        </span>
        <span data-aos="fade-left" data-aos-duration="1000">
          ects
        </span>
      </h1>
      <div className="project-con">
        <div
          className="project"
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="project-details">
            <h3>HeadGen AI</h3>
            <p>MERN Stack, Tailwind CSS</p>
            <img src={HeadGen} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>AI-Powered Headshots</li>
              <li>Customizable Features</li>
              <li>Ideal for Professionals</li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link to="https://headgen.ai/" target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link to="https://headgen.ai/" target="_blank">
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="project "
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-down-right"
          data-aos-duration="1000"
        >
          <div className="project-details">
            <h3>Goibibo Clone</h3>
            <p>React JS, Redux</p>
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
          data-aos-duration="1000"
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
          data-aos-duration="1000"
        >
          <div className="project-details">
            <h3>Amazon Clone </h3>
            <p>React JS, Redux</p>
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
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <div className="project-details">
            <h3>E-commerce Blog Backend</h3>
            <p>Node js, Express js, MongoDB</p>
            <img src={backend} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Create a new user, Login a user, Get user information.</li>
              <li>Add a new Product, Update a Product, Delete a Product.</li>
              <li>Add to cart, Order.</li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://github.com/devsharma2208/Full-Stack/tree/master/Backend"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/Full-Stack/tree/master/Backend"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div>
        {/* <div
          className="project"
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="project-details">
            <h3>Todo List</h3>
            <p>Html, CSS, Javascript</p>
            <img src={TodoListApp} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>Add a new task.</li>
              <li>Delete a task.</li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link
                to="https://devsharma2208.github.io/TodoListApp/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/TodoListApp"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </div>
          </div>
        </div> */}
        <div
          className="project "
          id={`${!selector && "project-dark-part"}`}
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="project-details">
            <h3>Star portal </h3>
            <p>Next js, Tailwind CSS, Redux</p>
            <img src={Intractive} alt="projectImage" />
          </div>
          <div className="fetaures">
            <h4 className="feature-con">Features</h4>
            <ul className="flight-content">
              <li>User-Friendly Interface</li>
              <li>Success Stories and Case Studies</li>
              <li>Use redux for state managment.</li>
              <li>Other...</li>
            </ul>
          </div>
          <div>
            <p>
              Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
            <div>
              <Link to="https://star-portal-wheat.vercel.app/" target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link
                to="https://github.com/devsharma2208/star_portal"
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
