import React from "react";
import "./Aboutme.css";
import DevCV from "./Dev-Sharma-Resume.pdf";
import { ReactTyped } from "react-typed";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const AboutMe = () => {
  const selector = useSelector((state) => state.theme);

  const onButtonClick = () => {
    const pdfUrl = DevCV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "DevSharmaResumewh.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container" id={`about${!selector && "-dark"}`}>
      <div className="about-txt">
        <h1 className="title" data-aos="fade-left" data-aos-duration="1000">
          About me
        </h1>
      </div>
      <div className="about-me">
        <div data-aos="fade-down-right" class="fdafdfa aos-init aos-animate">
          <h2
            className="text-title" //fhkjdhfkaf
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            I'm Dev Sharma and I'm a{" "}
            <ReactTyped
              strings={[
                "Front-End Developer",
                "React JS Developer",
                "Full-Stack Developer",
              ]}
              typeSpeed={200}
              loop
              backSpeed={50}
              cursorChar="|"
              showCursor={true}
            />
          </h2>
          <p
            style={{ textAlign: "justify", whiteSpace: "normal" }}
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            I love learning and solving problems. I wrote my first program in
            December 2022. Afterward, I became deeply interested in programming.
            Upon learning the basics, I explored various programming languages,
            frameworks, and technologies essential for building robust web
            applications. This journey of continuous learning has been both
            challenging and rewarding, fueling my passion for solving complex
            problems and creating innovative solutions in the realm of web
            development.
          </p>
          <p
            style={{ textAlign: "justify", whiteSpace: "normal" }}
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            I have developed several projects that have helped me improve my
            programming skills and learn new concepts every day. Additionally, I
            have gained a solid understanding of data structures and algorithms.
          </p>
        </div>
        <button
          className="animate__animated animate__fadeInRight"
          onClick={onButtonClick}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
