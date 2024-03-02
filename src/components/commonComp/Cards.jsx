import React from "react";
import styles from "../../styles/common/Card.module.css";

function Cards({ title, content }) {
  return (
    <>
      <div className={`${styles.cardWrapper}`}>
        <div className={`${styles.titleContainer}`}>
          <h3>{title}</h3>
        </div>
        {content}
      </div>
    </>
  );
}

export default Cards;
