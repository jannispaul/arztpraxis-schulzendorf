import React from 'react'
import styles from './vaccine-notice.module.css'

import VaccineImage from './Images/VaccineImage'

const vaccineNotice = (props) => (
  <div className={styles.newsContainer}>
    <div className={styles.newsItem}>
      <div className={styles.content}>
        <VaccineImage></VaccineImage>
        <div>
          <span
            className={styles.newsBody}
            dangerouslySetInnerHTML={{ __html: props.p }}
          ></span>
        </div>
      </div>
    </div>
  </div>
)

export default vaccineNotice
