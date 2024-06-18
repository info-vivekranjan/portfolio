import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Css/Footer.module.css";

function Footer() {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setUseremail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rojnkhg",
        "template_fyp2fmc",
        form.current,
        "9F0QpoakwHV_0Lgz8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setUsername("");
          setUseremail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.footerCont}>
      <div className={styles.titleHeader} data-aos="fade-right">
        Get In Touch
      </div>
      <div className={styles.line} data-aos="fade-left"></div>

      <div className={styles.socialMediaLinks}>
        <a href="https://www.linkedin.com/in/vivek0003/" target="_blank">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a href="https://github.com/info-vivekranjan" target="_blank">
          <i className="ri-github-fill"></i>
        </a>

        <a href="https://twitter.com/vivekranjan0003" target="_blank">
          <i className="ri-twitter-fill"></i>
        </a>
      </div>

      <div className={styles.footerContacts}>
        <a href="https://goo.gl/maps/e2bkN5VpvqkbCogR7" target="_blank">
          <i class="ri-map-pin-fill" style={{ marginRight: "5px" }}></i>
          <span style={{ fontSize: "20px" }}>Jamshedpur</span>
        </a>

        <a href="tel:+919156022914">
          <i class="ri-phone-fill" style={{ marginRight: "5px" }}></i>
          <span style={{ fontSize: "20px" }}>9156022914</span>
        </a>

        <a href="mailto:infovivek.ranjan@gmail.com" target="_blank">
          <i class="ri-mail-open-fill" style={{ marginRight: "5px" }}></i>
          <span style={{ fontSize: "20px" }}>infovivek.ranjan@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export { Footer };
