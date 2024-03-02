import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/layout/Navbar.module.css'

function NavbarName({animationClassName}) {
  return (
    <>
        <div className={`${animationClassName} ${styles.name}`}>
          <Link to="/">Kishan Kevadiya</Link>
          <p>Full-Stack Developer</p>
        </div>
    </>
  )
}

export default NavbarName