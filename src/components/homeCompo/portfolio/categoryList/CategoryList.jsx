import React from 'react'
import styles from '../../../../styles/home/protfolio/CategoryList.module.css'

function CategoryList({ item }) {
  return (
    <>
        <div className={`${styles.content}`}>
            <ul className={`${styles.contnetList}`}>
                {item.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    </>
  )
}

export default CategoryList