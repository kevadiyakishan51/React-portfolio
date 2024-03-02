import React, { Fragment } from "react";
import BlogInfoRow from "./BlogInfoRow";
import styles from "../../../../styles/home/blog/BlogInfoRow.module.css";
import { arryblogInfo } from "../../../../data/data";

function BlogRow() {
  return (
    <>
      <div className={`${styles.content}`}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "20px",
          }}
        >
          {arryblogInfo.map((item, index) => (
            <Fragment key={index}>
              <BlogInfoRow
                img={item.img}
                date={item.date}
                month={item.month}
                blog={item.blog}
                more={item.more}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogRow;
