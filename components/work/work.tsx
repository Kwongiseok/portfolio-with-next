import React from "react";
import styles from "./work.module.css";

const Work = (props) => (
  <section id="work" className={styles.section}>
    <div className={styles.section__container}>
      <h1>My Work</h1>
      <h3>Projects</h3>
      <div className={styles.work__categories}>
        <button className={styles.categories__btn} data-filter="*">
          All<span className={styles.category__count}>8</span>
        </button>
        <button className={styles.categories__btn} data-filter="front-end">
          Front-End<span className={styles.category__count}>3</span>
        </button>
        <button className={styles.categories__btn} data-filter="myproject">
          MyProject<span className={styles.category__count}>3</span>
        </button>
        <button className={styles.categories__btn} data-filter="Etc">
          Etc<span className={styles.category__count}>2</span>
        </button>
      </div>

      <div
        className={styles.work__projects}
        // target="blank"
        data-type="myproject"
      >
        <a
          href="https://github.com/Kwongiseok/PL_Assingment/blob/master/1)%EB%8F%8C%20%EA%B2%8C%EC%9E%84/StonePicking.cpp"
          className={styles.projects}
          target="blank"
          data-type="myproject"
        >
          <div className={styles.project__description}>
            <h3>StonePicking</h3>
            <span>Coding with AlphaBeta Pruning</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Work;
