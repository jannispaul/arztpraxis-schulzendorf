import React from 'react'
import { Link } from 'gatsby'
import styles from './nav.module.css'
import logo from '../../content/images/gatsby-icon.png'
import Icon from './icon'
import {ICONS} from '../constants/icons'

const Nav = () => (
  <nav>
      <Link to="/" className={`${styles.desktop} ${styles.logo}`}>
        <img src={logo} alt="logo"/>
        Arztpraxis Schulzendorf
      </Link>
      <a href="tel:03376248550" className={styles.desktop}>
        <Icon icon={ICONS.PHONE} color="var(--color-primary)"/>033762 48550
      </a>
      <Link to="/leistungen" className={styles.desktop} activeClassName={styles.active}>Leistungen</Link>
      <Link to="/termine" className={styles.desktop} activeClassName={styles.active}>Termin buchen</Link>
      <Link to="/" className={styles.mobile} activeClassName={styles.active}>
        <Icon icon={ICONS.PHONE} />
        <span>Home</span>
      </Link>
      <Link to="/leistungen" className={styles.mobile} activeClassName={styles.active}>
        <Icon icon={ICONS.PHONE} />
        <span>Leistungen</span></Link>
      <Link to="/termine" className={styles.mobile} activeClassName={styles.active}>
       <Icon icon={ICONS.PHONE} />
       <span>Termine</span></Link>
  </nav>
)

export default Nav