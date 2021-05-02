import React from "react";
import styles from "./work.module.css";

const Work = (props) => (
  <section id="work" className={styles.section}>
    <div className={styles.section__container}>
      <h1>My Work</h1>
      <h3>Projects</h3>
      <div className={styles.work__categories}>
        {/* <button className={styles.categories__btn} data-filter="*">
          All<span className={styles.category__count}>2</span>
        </button> */}
        <button className={styles.categories__btn} data-filter="front-end">
          Front-End<span className={styles.category__count}>2</span>
        </button>
        {/* <button className={styles.categories__btn} data-filter="myproject">
          MyProject<span className={styles.category__count}>2</span>
        </button>
        <button className={styles.categories__btn} data-filter="Etc">
          Etc<span className={styles.category__count}>0</span>
        </button> */}
      </div>

      <div className={styles.work__projects} data-type="myproject">
        <a
          href="https://baruntravel.me/"
          className={`${styles.projects} ${styles.baruntravel}`}
          target="blank"
          data-type="myproject"
        >
          <div className={styles.project__description}>
            <h3>바른 여행 길잡이[현재 진행 중]</h3>
            <span>Team Project</span>
            <a
              href="https://github.com/baruntravel/baruntravel"
              target="blank"
              className={styles.githubLink}
            >
              깃허브
            </a>
          </div>
        </a>
        <a
          href="https://603b38a0bf1ef7849dca85f7--emotion-diary.netlify.app/"
          className={`${styles.projects} ${styles.emotion}`}
          target="blank"
          data-type="myproject"
        >
          <div className={styles.project__description}>
            <h3>Emotion Diary</h3>
            <span>감정 일기 프로젝트</span>
            <a
              href="https://github.com/Kwongiseok/Emotion-Diary"
              target="blank"
              className={styles.githubLink}
            >
              깃허브
            </a>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Work;
