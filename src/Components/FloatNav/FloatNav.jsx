import "./floatnav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiContactsBook2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { floatNavFadeInUp, navWhileHover } from "../Variant";

const FloatNav = ({ stateActive, setNavState }) => {
  const currentNav = (params) => {
    setNavState(params);
  };

  return (
    <div className="floatNavContainer">
      <motion.div
        className="floatNav"
        variants={floatNavFadeInUp}
        animate="animate"
        initial="initial"
      >
        <motion.a
          href="#home"
          className={stateActive === "home" ? "active" : ""}
          onClick={() => currentNav("home")}
          variants={navWhileHover}
          whileHover="increase"
        >
          <AiOutlineHome />
        </motion.a>
        <motion.a
          href="#about"
          className={stateActive === "about" ? "active" : ""}
          onClick={() => currentNav("about")}
          variants={navWhileHover}
          whileHover="increase"
        >
          <BiUser />
        </motion.a>
        <motion.a
          href="#portfolio"
          className={stateActive === "portfolio" ? "active" : ""}
          onClick={() => currentNav("portfolio")}
          variants={navWhileHover}
          whileHover="increase"
        >
          <BsFolder2Open />
        </motion.a>
        <motion.a
          href="#service"
          className={stateActive === "service" ? "active" : ""}
          onClick={() => currentNav("service")}
          variants={navWhileHover}
          whileHover="increase"
        >
          <RiCustomerService2Fill />
        </motion.a>
        <motion.a
          href="#contact"
          className={stateActive === "contact" ? "active" : ""}
          onClick={() => currentNav("contact")}
          variants={navWhileHover}
          whileHover="increase"
        >
          <RiContactsBook2Line />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FloatNav;
