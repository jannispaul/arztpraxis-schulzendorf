import React from 'react'
import styles from './sectionstandard.module.css'


const Sectionstandard = props => {
  const sectionstyles = {
    image: {
      background: props.image,
    },
    content: {
      background:props.backgroundColor,
    }
  };

return (
  <section className={styles.section}>
    <div style={sectionstyles.image} className={styles.imageContainer}></div>
    <div style={sectionstyles.content} className={styles.contentContainer}>
      {props.children}
    </div>
  </section>
); 
}

export default Sectionstandard