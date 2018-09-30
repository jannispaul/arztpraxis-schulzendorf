import React from 'react'
import styles from './sectionstandard.module.css'


const Sectionstandard = ({ children }) => (
  <section className={styles.section}>
    <div className={styles.imageContainer}></div>
    <div className={styles.contentContainer}>
      {children}
    </div>

  </section>
)

export default Sectionstandard
  