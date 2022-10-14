import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Experience from "./Components/Experience/Experience";
import Service from "./Components/Service/Service";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import FloatNav from "./Components/FloatNav/FloatNav";

const App = () => {
  const [navState, setNavState] = useState("home");
  return (
    <>
      <FloatNav stateActive={navState} setNavState={setNavState} />
      <Hero stateActive={navState} setNavState={setNavState} />
      <About />
      <Portfolio />
      <Experience />
      <Service />
      <Testimonials />/
      <Contact />
      <Footer />
    </>
  );
};

export default App;
