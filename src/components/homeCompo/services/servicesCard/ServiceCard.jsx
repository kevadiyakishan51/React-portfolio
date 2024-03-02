import React from 'react'
import styles from '../../../../styles/home/service/ServiceCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ServiceCard({ icon, title, description}) {
  return (
    <>
        <div className={`${styles.content}`}>
        <FontAwesomeIcon
            className={`${styles.leftIcon}`}
            size="50px"
            icon={icon}
          />
          <h3>{title}</h3>
          <hr style={{width: "35px"}} />
          <p>{description}</p>
        </div>
    </>
  )
}

export default ServiceCard