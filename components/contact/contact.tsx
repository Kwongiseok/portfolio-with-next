import React from "react";
import styles from "./contact.module.css";
const Contact = (props) => (
  <section id={styles.contact} className={styles.section}>
    <h1 className={styles.contact__title}>Let's talk</h1>
    <h2 className={styles.contact__email}>ri2377@naver.com</h2>
    <div className={styles.contact__links}>
      <a href="https://github.com/Kwongiseok" target="_blank">
        <i className={styles.fabfagithub}></i>
      </a>
      <a href="#" target="_blank">
        <i className={styles.fabfalinkedinin}></i>
      </a>
    </div>
    <p className={styles.contact__rights}>2021 Giseok - All rights reserved</p>
  </section>
);

export default Contact;
