import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="wrapper">
        <div className="logoHolder">
          <img src={logo2} alt="logo" />
          <p>Shooot</p>
        </div>

        <div className="footerNav">
          <li>
            <a href="#home" className="active">
              home
            </a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#service">service</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </div>

        <div className="footerSocial">
          <span>
            <a href="http://www.instagram.com/">
              <BsInstagram />
            </a>
          </span>
          <span>
            <a href="http://www.youtube.com/">
              <BsYoutube />
            </a>
          </span>
          <span>
            <a href="http://www.facebook.com/">
              <FaFacebookSquare />
            </a>
          </span>
        </div>

        <p className="endLine">
          <AiOutlineCopyright /> 2022 21base
        </p>
      </div>
    </section>
  );
};

export default Footer;
