import React from 'react'
import styles from './buttonprimary.module.css'


const Buttonprimary = props => (
  <a href={props.link} className={styles.button}>
    {props.children}
  </a>
)

export default Buttonprimary