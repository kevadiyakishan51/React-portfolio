import React from "react";
import styles from "../../../../styles/home/blog/BlogInfoRow.module.css";

function BlogInfoRow({ img, date, month, blog, more }) {
  return (
    <>
      <div className={`${styles.content}`}>
        <div className={`${styles.imgItem}`}>
          <img src={img} alt="img" style={{ width: "100%", height: "233px" }} />

          <div className={`${styles.imgContent}`}>
            <h4>{date}</h4>
            <small>{month}</small>
          </div>
        </div>
        <h5>{blog}</h5>
        <h3>{more}</h3>
      </div>
    </>
  );
}

export default BlogInfoRow;
