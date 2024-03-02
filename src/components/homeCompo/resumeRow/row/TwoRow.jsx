import React from "react";
import styles from "../../../../styles/home/resume/TwoRwo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TwoRow({ icon, title, about, year, description }) {
  return (
    <>
      <div className={`${styles.listBorder}`}>
        <div className={`${styles.relative}`}>
          <FontAwesomeIcon
            className={`${styles.leftIcon}`}
            size="lg"
            icon={icon}
          />
          <h5>{title}</h5>
          <p>
            <strong>{about}</strong> | <small>{year}</small>
          </p>
          <p className={`${styles.description}`}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default TwoRow;
