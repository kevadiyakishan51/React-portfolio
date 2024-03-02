import React from "react";
import styles from "../../../../styles/home/protfolio/Imag.module.css";

function ImageItem({images}) {
    
  return (
    <>
  
      <div className={`${styles.imageContent}`}>
        <div className={`${styles.content}`}>
          <ul>
            {images.map((item, index) => (
              <li key={index}>
                <img src={item} alt="img" width="100%" 
                    height="100%" />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
}

export default ImageItem;
