import "./portfolio.css";
import img1a from "../../assets/img1a.jpg";
import img1b from "../../assets/img1b.jpg";
import img5a from "../../assets/img5a.jpg";
import img5b from "../../assets/img5b.jpg";
import img3a from "../../assets/img3a.jpg";
import img3b from "../../assets/img3b.jpg";
import img2a from "../../assets/img2a.jpg";
import img2b from "../../assets/img2b.jpg";
import img6a from "../../assets/img6a.jpg";
import img6b from "../../assets/img6b.jpg";
import img4a from "../../assets/img4a.jpg";
import img4b from "../../assets/img4b.jpg";
import { motion } from "framer-motion";
import { fadeInUpDown, whileInView } from "../Variant";

const portfolioData = [
  {
    id: 1,
    image1: img1a,
    image2: img1b,
    timeDelay: 0.2,
  },
  {
    id: 2,
    image1: img5a,
    image2: img5b,
    t1: "two",
    timeDelay: 0.3,
  },
  {
    id: 3,
    image1: img3a,
    image2: img3b,
    t1: "three",
    t2: "threeB",
    timeDelay: 0.4,
  },
  {
    id: 4,
    image1: img2a,
    image2: img2b,
    t1: "four",
    t2: "fourB",
    timeDelay: 0.5,
  },
  {
    id: 5,
    image1: img6a,
    image2: img6b,
    timeDelay: 0.6,
  },
  {
    id: 6,
    image1: img4a,
    image2: img4b,
    timeDelay: 0.7,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <motion.div
          className="portfolioTitle"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          custom={0.4}
          viewport={{ once: true}}
        >
          <h4>el portafolio</h4>
          <h3>portfolio</h3>
        </motion.div>

        <div className="portfolioGallery">
          {portfolioData.map(({ id, image1, image2, t1, t2, timeDelay }) => {
            return (
              <motion.div
                className="portfolioImages"
                key={id}
                variants={whileInView}
                initial="initial"
                whileInView="animate"
                custom={timeDelay}
                viewport={{ once: true}}
              >
                <img className={`firstImg ${t1}`} src={image1} alt="fImg" />
                <img className={`secondImg ${t2}`} src={image2} alt="sImg" />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="buttonHolder"
          variants={fadeInUpDown()}
          initial="initial"
          whileInView="animate"
          custom={0.5}
          viewport={{ once: true}}
        >
          <button className="portfolioBtn">
            <a href="http://www.pexels.com">Portfolio +</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
