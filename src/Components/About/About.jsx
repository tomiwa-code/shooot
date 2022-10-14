import "./about.css";
import firstImg from "../../assets/user2.jpg";
import secondImg from "../../assets/user.jpg";
import { motion } from "framer-motion";
import { rotateLayer, whileInView } from "../Variant";

const About = () => {
  return (
    <section id="about">
      <motion.div className="wrapper">
        <motion.div
          className="aboutTitle"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 1 }}
          custom={0}
        >
          <h4>sobre mi</h4>
          <h3>about me</h3>
        </motion.div>
        <div className="about-details">
          <motion.div
            className="about-img"
            variants={whileInView}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.9 }}
            custom={0}
          >
            <motion.div
              className="layer"
              variants={rotateLayer}
              viewport={{ once: true }}
            ></motion.div>
            <div className="about-user-Images">
              <img className="firstImg" src={firstImg} alt="fImg" />
              <img className="secondImg" src={secondImg} alt="sImg" />
            </div>
          </motion.div>

          <div className="about-text">
            <motion.div
              className="little-info"
              variants={whileInView}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 1 }}
              custom={0}
            >
              <div className="fBox">
                <h5>300+</h5>
                <p>Clients</p>
              </div>
              <div className="sBox">
                <h5>500+</h5>
                <p>Completed</p>
              </div>
              <div className="tBox">
                <h5>100%</h5>
                <p>Gadgets</p>
              </div>
            </motion.div>

            <motion.div
              className="theText"
              variants={whileInView}
              initial="initial"
              whileInView="animate"
              custom={0.8}
              viewport={{ once: true }}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                eaque similique eum consequuntur, vitae aut id, tempora
                doloremque nemo voluptatibus quisquam, sequi laboriosam
                molestiae aliquam nostrum officia ipsa. Accusantium, odio? aut
                id, tempora doloremque nemo voluptatibus quisquam, sequi
                laboriosam molestiae aliquam nostrum officia ip bus quisquam,
                sequi laboriosam molestiae aliquam nostrum officia ipsa.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
