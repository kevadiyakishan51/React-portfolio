import React from 'react'
import styles from '../styles/layout/Footer.module.css'
 
function Footer() {
  return (
    <>
      <div className={`${styles.content}`}>
        <p>© <strong>Domain Name.</strong> All Rights Reserved. Designed by <strong>HTML Codex</strong></p>
      </div>
    </>
  )
}

export default Footer