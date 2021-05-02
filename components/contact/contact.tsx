import React from "react";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = (props) => (
  <section id={styles.contact} className={styles.section}>
    <h1 className={styles.contact__title}>Let's talk</h1>
    <h2 className={styles.contact__email}>ri2377@naver.com</h2>
    <div className={styles.contact__links}>
      <a href="https://github.com/Kwongiseok" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={styles.fabfagithub} />
      </a>
    </div>
    <p className={styles.contact__rights}>2021 Giseok - All rights reserved</p>
  </section>
);

export default Contact;
