import "./testimonials.css";
import testy1 from "../../assets/testy1.jpg";
import testy2 from "../../assets/testy2.jpg";
import testy3 from "../../assets/testy3.jpg";
import testy4 from "../../assets/testy4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { whileInView } from "../Variant";

const data = [
  {
    avatar: testy1,
    name: "Rachel Greene",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora a commodi dolores sit placeat quod labore ad recusandae debitis odit sapiente qui cumque, earum blanditiis cupiditate. Asperiores, ut alias?",
  },
  {
    avatar: testy2,
    name: "Zainab Ayoola",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora a commodi dolores sit placeat quod labore ad recusandae debitis odit sapiente qui cumque, earum blanditiis cupiditate. Asperiores, ut alias?",
  },
  {
    avatar: testy3,
    name: "Kim Morris",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora a commodi dolores sit placeat quod labore ad recusandae debitis odit sapiente qui cumque, earum blanditiis cupiditate. Asperiores, ut alias?",
  },
  {
    avatar: testy4,
    name: "Mercy Diamond",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora a commodi dolores sit placeat quod labore ad recusandae debitis odit sapiente qui cumque, earum blanditiis cupiditate. Asperiores, ut alias?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="wrapper">
        <motion.div
          className="testyTitle"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          viewport={{ once: true }}
        >
          <h4>la reconmendacion</h4>
          <h3>testimonials</h3>
        </motion.div>

        <motion.div
          className="swiperHolder"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          custom={0.5}
          viewport={{ once: true }}
        >
          <Swiper
            className="slides"
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide key={index}>
                  <p className="quote">"</p>
                  <p className="text">{review}</p>
                  <div className="halfCircle"></div>
                  <div className="shortProfile">
                    <div className="imgHolder">
                      <img src={avatar} alt="img" />
                    </div>
                    <p className="name">{name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
