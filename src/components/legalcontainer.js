import React from 'react'
import styles from 'legalcontainer.module.css'


const Legalcontainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default Legalcontainer
