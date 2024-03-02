import React from "react";
import styles from "../../styles/common/PageInfo.module.css";

function PageInfo({bgTitle, mainTitle}) {
  return (
    <>
      <div className={`${styles.bgTitle}`}>
        <div className={`${styles.bgCon}`}>
          <h1>{bgTitle}</h1>
          <h2>{mainTitle}</h2>
        </div>
      </div>
    </>
  );
}

export default PageInfo;
