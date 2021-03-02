import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navbarRef = useRef();
  const [navbarHeight, setNavbarHeight] = useState();

  const navbarAddClass = useCallback(() => {
    if (window.scrollY + 25 > navbarHeight) {
      navbarRef.current.classList.add(styles["navbar--dark"]);
    } else {
      navbarRef.current.classList.remove(styles["navbar--dark"]);
    }
  });
  useEffect(() => {
    setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
    document.addEventListener("scroll", navbarAddClass);
    return () => {
      document.removeEventListener("scroll", navbarAddClass);
    };
  });

  return (
    <nav ref={navbarRef} id={styles.navbar}>
      <div className={styles.navbar__logo}>
        <i className="fas fa-chart-bar"></i>
        <a href="#" className={styles.navbar__tag}>
          Giseok
        </a>
      </div>
      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__menu__item} data-link="#home">
          Home
        </li>
        <li className={styles.navbar__menu__item}>About</li>
        <li className={styles.navbar__menu__item} data-link="#skills">
          Skills
        </li>
        <li className={styles.navbar__menu__item} data-link="#work">
          My Work
        </li>
        <li className={styles.navbar__menu__item} data-link="#testimonials">
          Testimonials
        </li>
        <li className={styles.navbar__menu__item} data-link="#contact">
          Contact
        </li>
      </ul>
      <button className={styles.navbar__toggle}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
