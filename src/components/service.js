import React from 'react'
// import { Link } from 'gatsby'
import styles from './service.module.css'
import Icon from './icon'
import {ICONS} from '../constants/icons'

const Service = () => (
  <section className={styles.service}>
      <h2>Wir bieten Ihnen</h2>
      <ul className={styles.list}>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Hausärztliche Betreuung ab 3 Jahren</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.test}/>Vorsorgeuntersuchungen (Check up 35)</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Jugenduntersuchungen (J1 & J2)</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Hautkrebsscreening</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Hausbesuche</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>EKG</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Behandlung chronischer Wunden</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Schulungen für Diabetes Patienten</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Spirometrie (Lungenfunktionstest)</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Laboruntersuchungen</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Kurgutachten</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Reisemedizinische Beratung</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Impfberatung, Impfungen</li>
        <li><Icon icon={ICONS.CHECKMARK} className={styles.icon}/>Palliativmedizinische Begleitung</li>
      </ul>
      <p>…und vieles mehr.</p>
  </section>
)

export default Service
