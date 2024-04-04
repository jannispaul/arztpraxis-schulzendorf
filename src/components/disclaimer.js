import React from 'react'
// import { Link } from 'gatsby'
import styles from './disclaimer.module.css'
import HeadlineText from './Layout/HeadlineText'

const Disclaimer = (props) => (
  <section className={styles.disclaimer}>
    <div className={styles.wrap}>
      <HeadlineText h2={props.h2}></HeadlineText>
      {props.items.map((item, index) => (
        <div key={index} className={styles.item}>
          <p>
            <b>{item.h3}</b>
          </p>
          <p>{item.p}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Disclaimer
