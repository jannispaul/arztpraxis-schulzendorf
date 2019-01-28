import React from 'react'
import { Link } from 'gatsby'
import styles from './nav.module.css'
import logo from '../../content/images/logo.svg'
import Icon from './icon'
import {ICONS} from '../constants/icons'

const Nav = () => (
  <nav className={styles.nav}>
      <Link to="/" className={`${styles.desktop} ${styles.logo}`}>
        <img src={logo} alt="Arztpraxis Schulzendorf Logo"/>
      </Link>
      <a href="tel:03376248550" className={`${styles.desktop} ${styles.iconLink}`}>
        <Icon icon={ICONS.PHONE} className={styles.icon}/>033762 48550
      </a>
      <Link to="/leistungen" className={styles.desktop} activeClassName={styles.active}>Leistungen</Link>
      <a href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/?utm_source=OTB-Button&utm_campaign=Kunden-Homepages" className={`${styles.desktop} ${styles.button}`}>Termin buchen</a>
      <Link to="/" className={styles.mobile} activeClassName={styles.active}>
        <Icon icon={ICONS.HOME} />
        <span>Home</span>
      </Link>
      <Link to="/leistungen" className={styles.mobile} activeClassName={styles.active}>
        <Icon icon={ICONS.SERVICES} />
        <span>Leistungen</span></Link>
      <a href="tel:03376248550/termine" className={styles.mobile}>
       <Icon icon={ICONS.CONTACT} />
       <span>Anrufen</span></a>
      <a href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/?utm_source=OTB-Button&utm_campaign=Kunden-Homepages" className={styles.mobile}>
       <Icon icon={ICONS.APPOINTMENT} />
       <span>Termine</span></a>
  </nav>
)

export default Nav
