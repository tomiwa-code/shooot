import "./service.css";
import { motion } from "framer-motion";
import { heroImages, whileInView } from "../Variant";

const serviceData = [
  {
    id: 1,
    title: "photoshoot",
    timeDelay: 0.7,
    priceList: [
      {
        _id: 1,
        span: "basic",
        pTag: "10 shots",
        price: "14,000",
      },
      {
        _id: 2,
        span: "premium",
        pTag: "15 shots",
        price: "17,000",
      },
      {
        _id: 3,
        span: "premium pro",
        pTag: "20 shots",
        price: "19,000",
      },
      {
        _id: 4,
        span: "premium pro max",
        pTag: "25 shots",
        price: "23,000",
      },
    ],
  },
  {
    id: 2,
    title: "event",
    timeDelay: 0.8,
    priceList: [
      {
        _id: 1,
        span: "basic",
        pTag: "10 shots",
        price: "14,000",
      },
      {
        _id: 2,
        span: "premium",
        pTag: "15 shots",
        price: "17,000",
      },
      {
        _id: 3,
        span: "premium pro",
        pTag: "20 shots",
        price: "19,000",
      },
      {
        _id: 4,
        span: "premium pro max",
        pTag: "25 shots",
        price: "23,000",
      },
    ],
  },
  {
    id: 3,
    title: "wedding",
    timeDelay: 0.9,
    priceList: [
      {
        _id: 1,
        span: "basic",
        pTag: "10 shots",
        price: "14,000",
      },
      {
        _id: 2,
        span: "premium",
        pTag: "15 shots",
        price: "17,000",
      },
      {
        _id: 3,
        span: "premium pro",
        pTag: "20 shots",
        price: "19,000",
      },
      {
        _id: 4,
        span: "premium pro max",
        pTag: "25 shots",
        price: "23,000",
      },
    ],
  },
];

const Service = () => {
  return (
    <section id="service">
      <div className="wrapper">
        <motion.div
          className="servicesTitle"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          viewport={{ once: true }}
        >
          <h4>el servicio</h4>
          <h3>services</h3>
        </motion.div>

        <div className="services">
          {serviceData.map(({ id, title, priceList, timeDelay }) => {
            return (
              <motion.div
                className="containerService"
                key={id}
                variants={heroImages}
                initial="initial"
                whileInView="animate"
                custom={timeDelay}
                viewport={{ once: true }}
              >
                <div className="sideDesign"></div>
                <h5>{title}</h5>
                {priceList.map(({ _id, span, pTag, price }) => {
                  return (
                    <div className="priceList" key={_id}>
                      <div className="packageShot">
                        <span>{span}</span>
                        <p>{pTag}</p>
                      </div>
                      <button>N {price}</button>
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
