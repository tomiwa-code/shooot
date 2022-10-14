import { useState } from "react";
import "./contact.css";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { whileInView } from "../Variant";

const Contact = () => {
  const [msgHide, setMsgHide] = useState({
    hide: true,
    color: "",
    text: "",
  });

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0bzn9a",
        "template_lzuz3aq",
        form.current,
        "7XYo08YpLvvcOo7Rf"
      )
      .then((result) => {
        if (result) {
          setMsgHide({
            hide: false,
            color: "green",
            text: "Mail sent",
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        if (err) {
          setMsgHide({ hide: false, color: "red", text: "Mail not sent" });
        }
      });
  };

  useEffect(() => {
    if (msgHide.hide === false) {
      setTimeout(() => {
        setMsgHide((prev) => ({
          ...prev,
          hide: true,
        }));
      }, 3500);
    }
  }, [msgHide.hide]);

  return (
    <section id="contact">
      <div className="wrapper">
        <motion.div
          className="contactTitle"
          variants={whileInView}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          viewport={{ once: true }}
        >
          <h4>contactarte conmigo</h4>
          <h3>contact me</h3>
        </motion.div>

        <div className="contact-contact">
          <motion.form
            ref={form}
            onSubmit={sendMail}
            className="emailMe"
            variants={whileInView}
            initial="initial"
            whileInView="animate"
            custom={0.5}
            viewport={{ once: true }}
          >
            <div className="senderDetails">
              <input type="text" name="name" placeholder="Mike Ross" required />
              <input
                type="text"
                name="email"
                placeholder="mikeross@gmail.com"
                required
              />
            </div>
            <div className="title">
              <input
                type="text"
                name="subject"
                placeholder="I need your service for a premium event"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Type your message here..."
              required
            ></textarea>
            <button>Send Message</button>
          </motion.form>
          <div className="contactSocial">
            <motion.div
              className="insta"
              variants={whileInView}
              initial="initial"
              whileInView="animate"
              custom={0.2}
              viewport={{ once: true }}
            >
              <a href="http://www.instagram.com/">
                <span>
                  <BsInstagram />
                </span>
                <p>@CamilaReyes</p>{" "}
              </a>
            </motion.div>
            <motion.div
              className="whats"
              variants={whileInView}
              initial="initial"
              whileInView="animate"
              custom={0.4}
              viewport={{ once: true }}
            >
              <a href="http://api.whatsapp.com/send?phone=+2349058419649&text=Hello Shooot, I got your contact from your website...">
                <span>
                  <BsWhatsapp />
                </span>
                <p>+2349058419649</p>{" "}
              </a>
            </motion.div>
          </div>
        </div>
        <div
          style={{
            transform:
              msgHide.hide === true ? "translateX(120%)" : "translateX(0)",
            background: msgHide.color === "green" ? "#198754" : "#d9534f",
          }}
          className="mailSent"
          onClick={() =>
            setMsgHide((prev) => ({
              ...prev,
              hide: true,
            }))
          }
        >
          <RiMailSendLine />
          <p>{msgHide.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
