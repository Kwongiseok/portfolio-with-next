import React from "react";
import styles from "./ArrowUpBtn.module.css";
const ArrowUpBtn = (props) => (
  <button className={styles.ArrowUp} data-link="#home">
    <i className={styles.fas}></i>
  </button>
);

export default ArrowUpBtn;
