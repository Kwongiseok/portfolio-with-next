import React from "react";
import styles from "./about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const About = (props) => (
  <section id={styles.about} className={styles.section__container}>
    <h1>About Me</h1>
    <p>
      프론트엔드 & 백엔드에 관심이 많으며, 새로운 웹 서비스 개발을 만들고자
      합니다.
      <br />
      흥미있는 분야에서 새롭게 배우는 것들을 좋아하고 배우고자,만들고자 하는
      욕심이 강합니다 <br />
      앞으로도 계속 성장하는 프로그래머가 되기위해 노력하는 것과 기발한 서비스를
      개발하는 것이 목표입니다. <br />
    </p>
    <div className={styles.about__majors}>
      <div className={styles.major}>
        <div className={styles.major__icon}>
          <FontAwesomeIcon icon={faJsSquare} className={styles.icon} />
        </div>
        <h2 className={styles.major__title}>Front-End</h2>
        <div className={styles.major__discription}>HTML , CSS , JavaScript</div>
      </div>
      <div className={styles.major}>
        <div className={styles.major__icon}>
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
        </div>
        <h2 className={styles.major__title}>React</h2>
        <div className={styles.major__discription}>
          Components ,Hooks, recoil
        </div>
      </div>
      <div className={styles.major}>
        <div className={styles.major__icon}>
          <FontAwesomeIcon icon={faPython} className={styles.icon} />
        </div>
        <h2 className={styles.major__title}>Python</h2>
      </div>
    </div>
    <div className={styles.School}>
      <img
        src="imgs/숭실대로고.png"
        alt="My_School Logo"
        className={styles.School__logo}
      />
      <div className={styles.School__description}>
        <p className={styles.school__name}>Soongsil University</p>
        <p className={styles.school__period}>2016.03.02 ~</p>
      </div>
    </div>
  </section>
);

export default About;
