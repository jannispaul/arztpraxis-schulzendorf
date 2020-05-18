import React from 'react'
// import { Link } from 'gatsby'
import styles from './service.module.css'
import Icon from './icon'
import { ICONS } from '../constants/icons'
import HeadlineText from '../components/Layout/HeadlineText'

const Service = () => (
  <section className={styles.service}>
    <HeadlineText
      h2="Wir bieten Ihnen"
      p="Von Impfungen und Jugenduntersuchungen, akuten Infekten, Schmerzerkrankungen und psychosomatischen Leiden bis Betreuung von Patienten mit chronischen Erkrankungen. Wir möchten in Zusammenarbeit mit Patient und Familie, jedem Patienten ermöglichen, trotz gesundheitlicher Beeinträchtigungen in ihrem/seinem Zuhause sicher versorgt zu bleiben."
    ></HeadlineText>
    <ul className={styles.list}>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Hausärztliche Betreuung ab 3 Jahren
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.test} />
        Vorsorgeuntersuchungen (Check up 35)
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Jugenduntersuchungen (J1 & J2)
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Hautkrebsscreening
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Hausbesuche
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        EKG
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Behandlung chronischer Wunden
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        CRP Messung
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Schulungen für Diabetes Patienten
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Spirometrie (Lungenfunktionstest)
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Laboruntersuchungen
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Kurgutachten
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Reisemedizinische Beratung
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Impfberatung, Impfungen
      </li>
      <li>
        <Icon icon={ICONS.CHECKMARK} className={styles.icon} />
        Geriatrische Beratung / Im Senium Zuhause
      </li>
    </ul>
    <p>…und vieles mehr.</p>
  </section>
)

export default Service
