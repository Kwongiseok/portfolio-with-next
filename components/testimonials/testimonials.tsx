import React from "react";
import styles from "./testimonials.module.css";
const Testimonials = (props) => (
  <section id="testimonials" className={styles.section}>
    <div className={styles.section__container}>
      <h1>Testimonials</h1>
      <h3>See what they say about me</h3>
      <div className={styles.testimonial}>
        <img
          src="imgs/testimonial/일론머스크.jfif"
          alt="People"
          className={styles.testimonial__avatar}
        />
        <div className={styles.testimonial__speech_bubble}>
          <p>He is a competent man</p>
          <p className={styles.name}>
            <a href="">Elon musk</a> / Tesla
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
