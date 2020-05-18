import React from 'react'
import styles from './ButtonPrimary.module.css'

const ButtonPrimary = (props) => (
  <a href={props.link} className={styles.button}>
    {props.children}
  </a>
)

export default ButtonPrimary
