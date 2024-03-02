import React from "react";
import styles from "../../../styles/home/About.module.css";
import PageInfo from "../../commonComp/PageInfo";
import { personalInfoLeft, personalInfoRight } from "../../../data/data";
import { capitalize } from "../../../utils/TextFormeting";

function About({ image, aboutTitle, aboutInfo }) {
  return (
    <>
      <PageInfo bgTitle="ABOUT" mainTitle="ABOUT ME" />

      <div className={`${styles.MyImage}`}>
        <div className={`${styles.mainImag}`}>
          <img src={image} alt="img" />
        </div>
        <div className={`${styles.aboutInfo}`}>
          <h3>{aboutTitle}</h3>
          <p>{aboutInfo}</p>

          <div className={`${styles.aboutMore}`}>
            <div className={`${styles.Dividetopart}`}>
              {Object.entries(personalInfoLeft).map((item, index) => (
                <li key={index}>
                  <h6>{capitalize(item[0])} : </h6>
                  <h5> {capitalize(item[1])}</h5>
                </li>
              ))}
            </div>

            <div className={`${styles.Dividetopart}`}>
              {Object.entries(personalInfoRight).map((item, index) => (
                <li key={index}>
                  <h6>{capitalize(item[0])} : </h6>
                  <h5> {item[1]}</h5>
                </li>
              ))}
            </div>
          </div>
          <button>Download CV</button>
        </div>
      </div>
    </>
  );
}

export default About;
