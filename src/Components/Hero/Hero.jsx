import "./hero.css";
import heroImg3 from "../../assets/heroImg3.jpg";
import heroImg2 from "../../assets/heroImg2.jpg";
import heroImg from "../../assets/heroImg.jpg";
import Logo from "../../assets/logo.png";
import { CgPexels } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiUnsplashFill } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { motion } from "framer-motion";
import {
  heroContainer,
  navVariants,
  slideAcross,
  fadeIn,
  fadeInUpDown,
  heroImages,
  bounce,
} from "../Variant";

const Hero = ({ stateActive, setNavState }) => {
  const currentNav = (params) => {
    setNavState(params);
  };

  return (
    <motion.section
      id="home"
      variants={heroContainer}
      animate="animate"
      initial="initial"
    >
      <motion.div className="nav" variants={navVariants}>
        <li>
          <a
            href="#home"
            className={stateActive === "home" ? "active" : ""}
            onClick={() => currentNav("home")}
          >
            home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={stateActive === "about" ? "active" : ""}
            onClick={() => currentNav("about")}
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={stateActive === "portfolio" ? "active" : ""}
            onClick={() => currentNav("portfolio")}
          >
            portfolio
          </a>
        </li>
        <li>
          <a
            href="#service"
            className={stateActive === "service" ? "active" : ""}
            onClick={() => currentNav("service")}
          >
            service
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={stateActive === "contact" ? "active" : ""}
            onClick={() => currentNav("contact")}
          >
            contact
          </a>
        </li>
      </motion.div>

      <div className="heroBody">
        <div className="heroText">
          <div className="anim">
            <motion.div
              className="slideAcross"
              variants={slideAcross}
            ></motion.div>
            <motion.h1 custom={1.3} variants={fadeIn}>
              i shoot <br /> everybody
            </motion.h1>
          </div>
          <motion.p custom={1.4} variants={fadeInUpDown()}>
            if you come you collect {":)"}
          </motion.p>

          <motion.button custom={1.55} variants={fadeInUpDown()}>
            <motion.a href="tel:+2349120749746" variants={fadeIn}>
              <ImPhone />
              call me
            </motion.a>
          </motion.button>

          <motion.div className="social" custom={2.3} variants={fadeInUpDown()}>
            <li>
              <a href="https://www.pexels.com/">
                <CgPexels />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.unsplash.com/">
                <RiUnsplashFill />
              </a>
            </li>
          </motion.div>
        </div>

        <motion.div className="heroImages">
          <motion.div className="fImg" custom={1.6} variants={heroImages}>
            <motion.img
              src={heroImg3}
              alt="fImg"
              variants={bounce}
              custom={1.6}
            />
          </motion.div>
          <motion.div className="sImg" custom={1.7} variants={heroImages}>
            <motion.img
              src={heroImg2}
              alt="sImg"
              variants={bounce}
              custom={1.5}
            />
          </motion.div>
          <motion.div className="tImg" custom={1.8} variants={heroImages}>
            <motion.img
              src={heroImg}
              alt="tImg"
              variants={bounce}
              custom={1.4}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="logoBrand" custom={2.4} variants={fadeInUpDown()}>
        <img src={Logo} alt="logo" />
        <p>Shooot</p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
