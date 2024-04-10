import React, { useEffect, useRef } from "react";
import "./Aboutme.css";
import { Link } from "react-router-dom";
import DevCV from "./DevCV.pdf";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import { useSelector } from "react-redux";

const AboutMe = () => {
  const selector = useSelector((state) => state.theme);
  const textRef = useRef(null);
  const onButtonClick = () => {
    const pdfUrl = DevCV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "DevCV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    AOS.init({
      // disable: "phone",

      duration: 700,
      // easing: "ease-out-cubic",
    });
    AOS.refreshHard();
  }, []);

  // useEffect(() => {
  //   const text = textRef.current;
  //   if (!text) return;

  //   // Split text into words
  //   const words = text.innerText.split(" ");

  //   // Clear text content
  //   text.innerText = "";

  //   // Create spans for each word
  //   words.forEach((word) => {
  //     const span = document.createElement("span");
  //     span.innerText = word + " ";
  //     text.appendChild(span);
  //   });

  //   // Animate each word
  //   gsap.from(text.children, {
  //     y: 50,
  //     opacity: 0,
  //     stagger: 0.1,
  //     duration: 1,
  //     ease: "power3.out",
  //   });
  // }, []);

  gsap.registerPlugin(SplitText);
  let mySplit = new SplitText(".split", { type: "chars" });
  let chars = mySplit.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.05,
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".split",
      start: "top 90%",
      markers: true,
    },
  });

  return (
    <div className="about-container" id={`about${!selector && "-dark"}`}>
      <div className="about-txt">
        <h1 className="title" data-aos="fade-left">
          {/* <span data-aos="fade-down">A</span>
          <span data-aos="fade-up-right">b</span>
          <span data-aos="fade-down-left">o</span>
          <span data-aos="fade-down-left">u</span>
          <span data-aos="fade-up-left">t</span> */}
          {/* <span>m</span>
          <span>e</span> */}
          About me
        </h1>
        {/* <h1 className="split">About</h1> */}
      </div>
      <div className="about-me">
        <div data-aos="fade-down-right" class="fdafdfa aos-init aos-animate">
          <h2 className="text-title">
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
          <p>
            I love learning and solving problems. I wrote my first program in
            December 2022. Afterward, I became deeply interested in programming.
            Upon learning the basics, I explored various programming languages,
            frameworks, and technologies essential for building robust web
            applications. This journey of continuous learning has been both
            challenging and rewarding, fueling my passion for solving complex
            problems and creating innovative solutions in the realm of web
            development.
          </p>
          <p>
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
