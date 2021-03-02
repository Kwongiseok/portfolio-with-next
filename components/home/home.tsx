import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

const BodyHome = (props) => (
  <section id={styles.home}>
    <div className={styles.home__Container}>
      <Image
        src="/imgs/img_test.jpg"
        alt="Giseok's profile photo"
        className={styles.home__avatar}
        width={250}
        height={250}
      />
      <h1 className={styles.home__title}>
        Hello,
        <br />
        I'm Giseok
      </h1>
      <h2 className={styles.home__description}>
        A Software Engineer & Student in Seoul, Korea
      </h2>
      <button className={styles.home__contact} data-link="#contact">
        Contact Me
      </button>
    </div>
  </section>
);

export default BodyHome;
