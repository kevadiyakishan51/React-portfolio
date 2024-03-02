import React, { useEffect, useState } from "react";
import styles from "../../styles/layout/Navbar.module.css";
import { Link } from "react-router-dom";
import NavbarName from "./NavbarName";
// import NavbarImg from "./NavbarImg";

function Navbar() {
  const [scroll, setScroll] = useState(window.scrollY);

  console.log(scroll);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar}`}>
        <div className={`${styles.linksLeft}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/service">Service</Link>
        </div>
        <div className={`${styles.personInfoContainer} navPersonInfoContainer`}>
          <NavbarName
          // animationClassName={scroll > 550 ? styles.fadeIn : styles.fadeOut}
          />
          {/* <NavbarImg
          animationClassName={scroll < 550 ? styles.fadeIn : styles.fadeOut}
        /> */}
        </div>
        <div className={`${styles.linksRight}`}>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
