import React from 'react'
import { Link } from 'gatsby'
import styles from 'nav.module.css'
import logo from '../images/gatsby-icon.png'
import Icon from './icon'
import {ICONS} from '../constants/icons'

const Nav = ({ siteTitle }) => (
  <nav>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo"/>
        Logo
      </Link>
      <a href="tel:03376248550" className={styles.phone}>
        <Icon icon={ICONS.BUBBLE} color="var(--color-primary)"/>033762 48550
      </a>
      <Link to="/leistungen">Leistungen</Link>
      <Link to="/termine">Termine</Link>
  </nav>
)

export default Nav
