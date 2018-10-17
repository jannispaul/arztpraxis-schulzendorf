import React from 'react'
import styles from 'legalcontainer.module.css'


const Legalcontainer = ({ children }) => (
  <div className={styles.contentContainer}>
    {children}
  </div>
)

export default Legalcontainer
