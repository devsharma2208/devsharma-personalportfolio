import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import DevSharma from "../../Images/DEVSHARMA.jpeg";
import emailjs from "@emailjs/browser";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const selector = useSelector((state) => state.theme);
  const [cognifity, setCognifity] = useState(false);
  const [windowDimention, setWindowDimention] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnVisibel, setBtnVisibel] = useState(true);
  // const { width, height } = useWindowSize();
  const detectSize = () => {
    setWindowDimention({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  });
  useEffect(() => {
    if (!name || !email || !message) {
      setBtnVisibel(true);
    } else {
      setBtnVisibel(false);
    }
  }, [name, email, message]);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("dev");
    emailjs
      .sendForm("service_a6mekm1", "template_3x3hpn3", form.current, {
        publicKey: "bj00uJZXauMUVF1xD",
      })
      .then(
        () => {
          setCognifity(true);
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact_container" id={`contact${!selector && "-dark"}`}>
      <h1>Contact</h1>
      <div>
        <img className="image" src={DevSharma} alt="dev" />
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              name="user_name"
              id="username"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <label htmlFor="message">Massage : </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Type Your Massage here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            {/* <button type="submit" disabled>
              Send message
            </button> */}
            <input
              type="submit"
              value="Submit"
              disabled={btnVisibel}
              id={`${!btnVisibel && "btnVisibel"}`}
            />
          </div>
          {cognifity && (
            <Confetti
              className="confetti"
              height={3800}
              numberOfPieces={1000}
              gravity={0.1}
              // wind={0.1}
              friction={0.99}
              recycle={false}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
