import React from "react";
import styles from "./skills.module.css";

const Skills = (props) => (
  <section id={styles.skills} className={styles.section}>
    <div className={styles.section__container}>
      <h1>Skills</h1>
      <h2>Skills & Attributes</h2>
      <p>
        여러가지 프로그래밍을 접해본 경험이 있고, 새로운 기술들을 배우고자 하는
        욕심, 흥미가 있다. 팀원들과 의사소통을 잘하고자 항상 노력하며, 혼자서도
        하는 것에 거리낌이 없다. 계획을 세워 그에 맞게 행동하는 것을 좋아하며
        시간 약속을 잘 지킨다. 스트레스 받더라도 금방 털어내고 작은 일에 크게
        연연해하지 않는다.
      </p>
      <div className={styles.skillset}>
        <div className={styles.skillset__left}>
          <h3 className={styles.skillset__title}>Skills</h3>
          <div className={styles.skill}>
            <div className={styles.skill__descreption}>
              <span>HTML</span>
              <span>99%</span>
            </div>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
              {/* style="width: 99%;" */}
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill__descreption}>
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill__descreption}>
              <span>JavaScript</span>
              <span>85%</span>
            </div>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill__descreption}>
              <span>Python</span>
              <span>80%</span>
            </div>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill__descreption}>
              <span>React</span>
              <span>0%</span>
            </div>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill__descreption}>
              <span>TypeScript</span>
              <span>0%</span>
            </div>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
          </div>
        </div>
        <div className={styles.skillset__right}>
          <div className={styles.tools}>
            <h3 className={styles.skillset__title}>Tools</h3>
            <ul className={styles.tools__list}>
              <li>
                <span>Visual Studio Code</span>
              </li>
              <li>
                <span>Visual Studio</span>
              </li>
              <li>
                <span>Eclipse</span>
              </li>
              <li>
                <span>Pychar</span>
              </li>
              <li>
                <span>Cygwin</span>
              </li>
            </ul>
          </div>
          <div className={styles.etc}>
            <h3 className={styles.skillset__title}>Etc</h3>
            <ul className={styles.etc__list}>
              <li>
                <span>Git</span>
              </li>
              <li>
                <span>Math</span>
              </li>
              <li>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
