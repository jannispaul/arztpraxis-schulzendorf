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
      <Link to="tel:0" className={styles.phone}>
        <Icon icon={ICONS.BUBBLE} color="var(--primary-color)"/> 010101010
      </Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/termine">Termine</Link>
  </nav>
)

export default Nav
