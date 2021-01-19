import React from 'react'
import styles from './notice.module.css'
import Icon from './icon'
import { ICONS } from '../constants/icons.js'

const Notice = (props) => (
  <div className={styles.newsContainer}>
    <div className={styles.newsItem}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Icon icon={ICONS.WARNING} />
        </div>
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

export default Notice
