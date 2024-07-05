import { useState } from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactForm from "./Components/Contact_Form/ContactForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hembger_menu from "./Components/Hembger_menu/Hembger_menu";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Social_Media from "./Components/Social_Media/Social_Media";
import Web_Image from "./Components/Web_Image/Web_Image";
import { useDispatch, useSelector } from "react-redux";
import "./style/App.css";
import Experience from "./Components/Experience/Experience";

function App() {
  const selector = useSelector((state) => state.hemburgur_Menu);

  return (
    <div className="App">
      <Header />
      {selector && <Hembger_menu />}
      <Info />
      <Web_Image />
      <AboutMe />
      <Experience/>
      <Skills />
      <Projects />
      <ContactForm />
      <Social_Media />
      <Footer />
    </div>
  );
}

export default App;
