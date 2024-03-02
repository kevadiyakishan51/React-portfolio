import React from 'react'
import styles from '../../styles/layout/Navbar.module.css'
import Image from '../../img/admin.jpg'

function NavbarImg( {animationClassName} ) {
  return (
    <>
      <div
      className={`${animationClassName} ${styles.personImageContainer} navImage`}
    >
      <img
        src={Image}
        alt="user"
      />
    </div>
    </>
  )
}

export default NavbarImg