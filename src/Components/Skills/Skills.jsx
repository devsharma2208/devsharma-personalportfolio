import React from "react";
import "./Skills.css";
import { useSelector } from "react-redux";
const Skills = () => {
  const selector = useSelector((state) => state.theme);
  return (
    <div className="skills" id={`skill${!selector && "s-dark"}`}>
      <h1>Skills</h1>
      <div className="language-container">
        <div>
          <div data-aos="zoom-in-left">
            <img
              src="https://icons.veryicon.com/png/System/Hex/html%205.png"
              alt="html"
            />
            <h3>HTML</h3>
          </div>
          <div data-aos="zoom-in-right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react"
            />
            <h3>React</h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              src="https://img.icons8.com/office/480w/express-js.png"
              alt="express"
            />
            <h3> Express JS</h3>
          </div>
          <div
            data-aos="fade-down"
            // data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
              alt="java"
            />
            <h3>Java</h3>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src="https://mui.com/static/logo.png" alt="matrial" />
            <h3> Material UI</h3>
          </div>
        </div>
        <div>
          <div data-aos="zoom-out-right">
            <img
              src="https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png"
              alt="css"
            />
            <h3>CSS</h3>
          </div>
          <div data-aos="zoom-out-left">
            {/* <img
              src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png"
              alt="next js"
            /> */}
            <img
              src="data:image/png;base64,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"
              alt="ns"
            />
            <h3>Next JS</h3>
          </div>
          <div data-aos="zoom-out-up">
            <img
              src="https://www.svgrepo.com/show/331488/mongodb.svg"
              alt="mongo"
            />
            <h3>MongoDB</h3>
          </div>
          <div data-aos="zoom-out-down">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
              alt="git"
            />
            <h3>GIT</h3>
          </div>
          <div data-aos="fade-down-right">
            <img
              src="https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png"
              alt="redux"
            />
            <h3>Redux</h3>
          </div>
        </div>
        <div>
          <div data-aos="fade-down-left">
            <img
              src="https://logosdownload.com/logo/javascript-logo-big.png"
              alt="javascript"
            />
            <h3>JavaScript</h3>
          </div>
          <div data-aos="fade-down-right">
            <img
              src="https://www.mindrops.com/images/nodejs-image.webp"
              alt="node"
            />
            <h3>Node JS</h3>
          </div>
          <div data-aos="flip-left">
            <img
              src="https://tshahab.com/wp-content/uploads/2022/08/data-structure.png"
              alt="dsa"
            />
            <h3>DSA</h3>
          </div>
          <div data-aos="flip-right">
            <img
              src="https://icons.veryicon.com/png/128/commerce-shopping/linear-mall-icon/more-508.png"
              alt="more"
            />
            <h3>More Libraries</h3>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
