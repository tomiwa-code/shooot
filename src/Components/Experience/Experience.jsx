import "./experience.css";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeInLeftRight, whileInView } from "../Variant";

const expData1 = [
  {
    id: 1,
    text: "covered lagos state music talent show (2021)",
  },
  {
    id: 2,
    text: "covered unilag annual trump event (2022)",
  },
  {
    id: 3,
    text: "covered several birthday events (2020 till date)",
  },
  {
    id: 4,
    text: "covered several pre-wedding photoshoots (2020 till date)",
  },
];

const expData2 = [
  {
    id: 1,
    text: "covered lagos state music talent show (2021)",
  },
  {
    id: 2,
    text: "covered unilag annual trump event (2022)",
  },
  {
    id: 3,
    text: "covered several birthday events (2020 till date)",
  },
  {
    id: 4,
    text: "covered several pre-wedding photoshoots (2020 till date)",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="wrapper">
        <motion.div
          className="expTitle"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          custom={0.4}
          viewport={{ once: true }}
        >
          <h4>la experiencia</h4>
          <h3>Experience</h3>
        </motion.div>

        <div className="experienced">
          <div className="fHalf half">
            {expData1.map(({ id, text }) => {
              return (
                <motion.div
                  className="lists"
                  key={id}
                  variants={fadeInLeftRight()}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <p>{text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="sHalf half">
            {expData2.map(({ id, text }) => {
              return (
                <motion.div
                  className="lists"
                  key={id}
                  variants={fadeInLeftRight("right")}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <p>{text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
