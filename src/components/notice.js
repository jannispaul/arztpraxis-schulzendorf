import React from 'react'
import styles from './notice.module.css'
import Icon from './icon'
import { ICONS } from '../constants/icons.js'

const Notice = () => (
  <div className={styles.newsContainer}>
    <div className={styles.newsItem}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Icon icon={ICONS.WARNING} />
        </div>
        <div>
          <span className={styles.newsBody}>
            Liebe Patientin, lieber Patient,
            <br /> sollten Sie den Verdacht haben, mit dem neuen Coronavirus
            infiziert zu sein <b>bitte die Praxis nicht betreten! </b>
            Um das Ausbreitungsrisiko zu minimieren, sind Sie aufgerufen zu
            Hause zu bleiben und nicht in die Praxis zu kommen.
            <br />
            <br />
            Nehmen Sie zuerst telefonisch Kontakt auf: <br />
            Arztpraxis: 033762-48550 / Wochenende: 116 117 <br />
            Gesundheitsamt (Mo.-So. 8-18 Uhr): 03375-262146 <br />
            Bürgertelefon (Mo.-Fr. 9-15 Uhr): 0331-8683777
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Notice
