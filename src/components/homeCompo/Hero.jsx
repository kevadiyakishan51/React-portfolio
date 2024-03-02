import React from "react";
import styles from "../../styles/home/Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Hero({ title, semiTitle, subtitle, fixTitle }) {
  return (
    <>
      <div className={`${styles.container}`}>
          <h3>{semiTitle}</h3>
          <h1>{title}</h1>
          <div className={`${styles.animationContainer}`}>
            <h4>{fixTitle}</h4>
            <h2>{subtitle}</h2>
          </div>
          <div className={`${styles.crossdiv}`}>
            <FontAwesomeIcon icon={faArrowDown} className={`${styles.downArrow }`}/>
          </div>
          <div className={`${styles.contentContainer}`}></div>
      </div>
    </>
  );
}

export default Hero;
