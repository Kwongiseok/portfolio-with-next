import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navbarRef = useRef();
  const [navbarHeight, setNavbarHeight] = useState();
  const scrollIntoView = useCallback((selector) => {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  });

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
        <li
          className={styles.navbar__menu__item}
          data-link="#home"
          onClick={(e) => {
            scrollIntoView(e.target.dataset.link);
          }}
        >
          Home
        </li>
        <li
          className={styles.navbar__menu__item}
          data-link="#about"
          onClick={(e) => {
            scrollIntoView(e.target.dataset.link);
          }}
        >
          About
        </li>
        <li
          className={styles.navbar__menu__item}
          data-link="#skills"
          onClick={(e) => {
            scrollIntoView(e.target.dataset.link);
          }}
        >
          Skills
        </li>
        <li
          className={styles.navbar__menu__item}
          data-link="#work"
          onClick={(e) => {
            scrollIntoView(e.target.dataset.link);
          }}
        >
          My Work
        </li>
        <li
          className={styles.navbar__menu__item}
          data-link="#testimonials"
          onClick={(e) => {
            scrollIntoView(e.target.dataset.link);
          }}
        >
          Testimonials
        </li>
        <li
          className={styles.navbar__menu__item}
          data-link="#contact"
          onClick={(e) => {
            scrollIntoView(e.target.dataset.link);
          }}
        >
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
